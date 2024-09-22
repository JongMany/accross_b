import styled from '@emotion/styled';
import { css } from '@emotion/react';
import { ChangeEventHandler, useEffect, useState } from 'react';
import {
  DndContext,
  DragEndEvent,
  DragOverEvent,
  DragOverlay,
  DragStartEvent,
  KeyboardSensor,
  TouchSensor,
  useSensor,
  useSensors,
} from '@dnd-kit/core';
import { sortableKeyboardCoordinates } from '@dnd-kit/sortable';
import { GroupStatus, ListGroup } from 'shared-types';
import { toast } from 'react-toastify';
import useGroupList from './_hooks/queries/useGroupList';
import useActiveGroupItemModal from './_stores/useActiveGroupItemModal';
import useColumnList from './_hooks/queries/useColumnList';
import CreateGroupDialog from './_components/CreateGroupDialog';
import UpdateColumnNameDialog from './_components/UpdateColumnNameDialog';
import useActiveColumnItem from './_stores/useActiveColumnItem';
import { IANA_TIMEZONES } from './_constants/timezones';
import useCurrentTimezone from './_stores/useCurrentTimezone';
import Column from './_components/Column';
// import GroupItem from './_components/GroupItem';
import { MouseSensor } from './_utils/dnd';
import { getNextStatus, getPrevStatus } from './_utils/column';
import useUpdateGroupStatus from './_hooks/mutations/useUpdateGroupStatus';

export default function AppIndexPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const closeModal = () => setIsModalOpen(false);
  const onModalOpen = () => setIsModalOpen(true);
  const {
    data: { columns: columnList },
    isError: isColumListError,
    isLoading: isColumnListLoading,
  } = useColumnList();
  const {
    data: { groups: groupList },
    isError: isGroupListError,
    isLoading: isGroupListLoading,
  } = useGroupList();

  const { mutate: updateGroupStatus } = useUpdateGroupStatus();

  const [currentGroupList, setCurrentGroupList] = useState(groupList);
  useEffect(() => {
    setCurrentGroupList(groupList);
  }, [groupList]);

  const { id: activeGroupItemModalId, resetId: restGroupItemModalId } =
    useActiveGroupItemModal();
  const { timezone, setTimezone } = useCurrentTimezone();

  const [activeGroupItemDndId, setActiveGroupItemDndId] = useState<
    string | null
  >(null);

  const [isColumnModalOpen, setIsColumnModalOpen] = useState(false);
  const { setId } = useActiveColumnItem();
  const closeColumnModal = () => setIsColumnModalOpen(false);
  const openColumnModal = (id: string) => () => {
    setIsColumnModalOpen(true);
    setId(id);
  };

  const changeTimezone: ChangeEventHandler<HTMLSelectElement> = (e) => {
    setTimezone(e.target.value);
  };

  const sensors = useSensors(
    useSensor(MouseSensor),
    useSensor(TouchSensor),
    useSensor(KeyboardSensor, {
      coordinateGetter: sortableKeyboardCoordinates,
    }),
  );

  const dragStartHandler = ({ active }: DragStartEvent) => {
    if (activeGroupItemModalId) {
      restGroupItemModalId();
    }
    setActiveGroupItemDndId(active.id as string);
  };

  const [targetColumn, setTargetColumn] = useState<keyof ListGroup | null>(
    null,
  );

  const dragOverHandler = ({ active, over }: DragOverEvent) => {
    const overId = over?.id as GroupStatus | undefined;
    const activeId = active?.id as string;
    if (!overId || !activeId) {
      return;
    }
    const currentContainer = Object.values(currentGroupList)
      .flat()
      .find((group) => group.id === activeId)?.status;
    if (!currentContainer) {
      return;
    }

    if (['INIT', 'PROGRESS', 'DONE', 'PENDING'].includes(overId)) {
      const currentStatus = currentContainer.toLowerCase() as keyof ListGroup;
      const targetStep = overId.toLowerCase() as keyof ListGroup;
      if (currentStatus !== targetStep) {
        setTargetColumn(targetStep);
        setCurrentGroupList((prev) => ({
          ...prev,
          [currentStatus]: prev[currentStatus].filter(
            (group) => group.id !== activeId,
          ),
          [targetStep]: [
            ...prev[targetStep],
            prev[currentStatus].find((group) => group.id === activeId),
          ].map((group) => ({
            ...group,
            status: overId,
          })),
        }));
      }

      // const activeContainer = active?.data?.current?.sortable.containerId;
    }
  };

  const dragEndHandler = ({ active, over }: DragEndEvent) => {
    const overId = over?.id;
    const activeId = active?.id as string;
    if (!overId || !activeId) {
      setActiveGroupItemDndId(null);
    }

    // const activeContainer = active?.data?.current?.sortable.containerId;
    // const overContainer = over?.data?.current?.sortable.containerId || overId;

    // const overContainer = over.data.current?.sortable.containerId || overId;

    const currentStatus = Object.values(groupList)
      .flat()
      .find((group) => group.id === activeId)?.status;
    if (!currentStatus) {
      return;
    }
    const prevColumn = currentStatus.toLowerCase() as keyof ListGroup;
    const currentColumn = getNextStatus(
      currentStatus,
    ).toLowerCase() as keyof ListGroup;
    if (currentColumn === targetColumn) {
      setCurrentGroupList((prev) => ({
        ...prev,
        [prevColumn]: prev[prevColumn].filter((group) => group.id !== activeId),
        [currentColumn]: [
          ...prev[currentColumn],
          prev[currentColumn].find((group) => group.id === activeId),
        ].map((group) => ({
          ...group,
          status: currentColumn,
        })),
      }));
      updateGroupStatus(activeId);
    } else {
      setCurrentGroupList(groupList);
      toast.error('이동할 수 없는 그룹입니다.', {
        autoClose: 2000,
      });
    }
  };

  useEffect(() => {
    const outerElementClickHandler = (e: MouseEvent) => {
      e.stopPropagation();
      const target = e.target as HTMLElement;

      if (!target.closest('.setting')) {
        restGroupItemModalId();
      }
    };
    window.addEventListener('click', outerElementClickHandler);
  }, [restGroupItemModalId]);

  return (
    <Container>
      {(isColumListError || isGroupListError) && (
        <div>에러가 발생했습니다.</div>
      )}
      {(isGroupListLoading || isColumnListLoading) && <div>로딩중입니다.</div>}
      {!isGroupListLoading && currentGroupList && (
        <div>
          <div
            css={css`
              display: flex;
              justify-content: space-between;
              align-items: center;
            `}
          >
            <h1>어크로스비</h1>
            <CreateButton type="button" onClick={onModalOpen}>
              <span>+</span>
              <span>신규 그룹 추가</span>
            </CreateButton>
            <div>
              <select
                id="timezone-select"
                css={css`
                  min-width: 140px;
                  padding: 6px 10px;
                `}
                onChange={changeTimezone}
                defaultValue={timezone}
              >
                {IANA_TIMEZONES.map((item) => (
                  <option key={item.label} value={item.timezone}>
                    {item.label}
                  </option>
                ))}
              </select>
            </div>
          </div>
          <DndContext
            sensors={sensors}
            onDragStart={dragStartHandler}
            onDragOver={dragOverHandler}
            onDragEnd={dragEndHandler}
          >
            <GridView>
              {columnList.map((column) => (
                <Column
                  key={column.id}
                  groupList={currentGroupList}
                  column={column}
                  openColumnModal={openColumnModal(column.id)}
                />
              ))}
            </GridView>
            {/* <DragOverlay>
              {activeGroupItemModalId && activeDragGroup ? (
                <GroupItem
                  dragOverlay
                  count={activeDragGroup.orderCount}
                  {...activeDragGroup}
                />
              ) : null}
            </DragOverlay> */}
          </DndContext>
        </div>
      )}
      <CreateGroupDialog isOpen={isModalOpen} onClose={closeModal} />
      {isColumnModalOpen && (
        <UpdateColumnNameDialog
          isOpen={isColumnModalOpen}
          onClose={closeColumnModal}
        />
      )}
    </Container>
  );
}

const Container = styled.div`
  width: 1020px;
  margin: 0 auto;
`;

const GridView = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1rem;
  .column-name {
    cursor: pointer;
  }
  .column {
    background-color: #f9fafe;
    border-radius: 8px;

    .column-contents {
      padding: 0 16px 16px 16px;
      display: flex;
      flex-direction: column;
      gap: 14px;
    }

    h2 {
      margin: 0;
      height: 48px;
      display: flex;
      align-items: center;
      padding: 0 35px;
      color: #53389e;
      font-size: 12px;
      font-weight: 700;
      line-height: 18px;
      letter-spacing: 0.24px;
    }
  }
`;

const CreateButton = styled.button`
  padding: 8px 14px;
  display: flex;
  border-radius: 8px;
  background-color: #7f56d9;
  border: 1px solid #7f56d9;
  width: 136px;
  height: 36px;
  color: #ffffff;
  gap: 8px;
  font-weight: 700;
  font-size: 14px;
  line-height: 20px;
  justify-content: center;
`;
