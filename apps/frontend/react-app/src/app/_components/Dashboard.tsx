import styled from '@emotion/styled';
import React, { useEffect, useState } from 'react';
import { GroupStatus, ListGroup } from 'shared-types';
import {
  DndContext,
  DragEndEvent,
  DragOverEvent,
  KeyboardSensor,
  TouchSensor,
  useSensor,
  useSensors,
} from '@dnd-kit/core';
import { sortableKeyboardCoordinates } from '@dnd-kit/sortable';
import { toast } from 'react-toastify';
import { css } from '@emotion/react';
import useModal from '../_hooks/commons/useModal';
import useActiveColumnItem from '../_stores/useActiveColumnItem';
import useUpdateGroupStatus from '../_hooks/mutations/useUpdateGroupStatus';
import useActiveGroupItemModal from '../_stores/useActiveGroupItemModal';
import { MouseSensor } from '../_utils/dnd';
import { getNextStatus } from '../_utils/column';
import TimezoneSelector from './TimezoneSelector';
import Column from './Column';
import CreateGroupDialog from './CreateGroupDialog';
import UpdateColumnNameDialog from './UpdateColumnNameDialog';

type Props = {
  columnList: {
    id: string;
    name: string;
    status: GroupStatus;
  }[];
  groupList: ListGroup;
};
function Dashboard({ columnList, groupList }: Props) {
  const {
    isOpen: isCreateGroupModalOpen,
    closeModal: closeCreateGroupModal,
    openModal: openCreateGroupModal,
  } = useModal();
  const {
    isOpen: isUpdateColumnModalOpen,
    closeModal: closeUpdateColumnModal,
    openModal: openUpdateColumnModal,
  } = useModal();
  const { setId: setActiveColumnItemId } = useActiveColumnItem();

  const openColumnModal = (id: string) => () => {
    openUpdateColumnModal();
    setActiveColumnItemId(id);
  };

  const { mutate: updateGroupStatus } = useUpdateGroupStatus();

  const [currentGroupList, setCurrentGroupList] = useState(groupList);
  useEffect(() => {
    setCurrentGroupList(groupList);
  }, [groupList]);

  const { id: activeGroupItemModalId, resetId: restGroupItemModalId } =
    useActiveGroupItemModal();

  const sensors = useSensors(
    useSensor(MouseSensor),
    useSensor(TouchSensor),
    useSensor(KeyboardSensor, {
      coordinateGetter: sortableKeyboardCoordinates,
    }),
  );

  const dragStartHandler = () => {
    if (activeGroupItemModalId) {
      restGroupItemModalId();
    }
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

    const activeContainer = active.data.current?.sortable.containerId;
    const overContainer = over?.data.current?.sortable.containerId || over?.id;

    if (activeContainer === overContainer) return;

    const flatGroupList = Object.values(groupList).flat();

    const overColumn = ['INIT', 'PROGRESS', 'DONE', 'PENDING'].includes(overId)
      ? (overId.toLowerCase() as keyof ListGroup)
      : (flatGroupList
          .find((group) => group.id === overId)
          ?.status?.toLowerCase() as keyof ListGroup);

    setTargetColumn(overColumn);
    setCurrentGroupList((prev) => {
      const activeGroup = flatGroupList.find((group) => group.id === activeId)!;
      // 모든 컬럼에서 activeGroup 제거
      const updatedGroupList = Object.keys(prev).reduce((acc, key) => {
        acc[key as keyof ListGroup] = prev[key as keyof ListGroup].filter(
          (group) => group.id !== activeId,
        );
        return acc;
      }, {} as ListGroup);

      // overColumn에 activeGroup 추가
      updatedGroupList[overColumn] = [
        ...updatedGroupList[overColumn],
        { ...activeGroup, status: overId },
      ];

      // 드롭된 위치로 그룹 이동 및 상태 변경
      return updatedGroupList;
    });
  };

  const dragEndHandler = ({ active }: DragEndEvent) => {
    const activeId = active?.id as string;

    const currentStatus = Object.values(groupList)
      .flat()
      .find((group) => group.id === activeId)?.status;
    if (!currentStatus) {
      return;
    }

    const currentColumn = getNextStatus(
      currentStatus,
    ).toLowerCase() as keyof ListGroup;
    if (currentColumn === targetColumn) {
      updateGroupStatus(activeId);
    } else {
      setCurrentGroupList(groupList);
      toast.error('이동할 수 없는 그룹입니다.', {
        autoClose: 2000,
      });
    }
  };

  // 설정 모달은 클릭가능하도록 설정
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
      <div>
        <div
          css={css`
            display: flex;
            justify-content: space-between;
            align-items: center;
          `}
        >
          <h1>어크로스비</h1>
          <CreateButton type="button" onClick={openCreateGroupModal}>
            <span>+</span>
            <span>신규 그룹 추가</span>
          </CreateButton>
          <TimezoneSelector />
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
        </DndContext>
      </div>
      <CreateGroupDialog
        isOpen={isCreateGroupModalOpen}
        onClose={closeCreateGroupModal}
      />
      {isUpdateColumnModalOpen && (
        <UpdateColumnNameDialog
          isOpen={isUpdateColumnModalOpen}
          onClose={closeUpdateColumnModal}
        />
      )}
    </Container>
  );
}

export default Dashboard;

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
