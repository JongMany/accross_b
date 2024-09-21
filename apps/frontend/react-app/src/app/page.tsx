import styled from '@emotion/styled';
import { css } from '@emotion/react';
import { ChangeEventHandler, useEffect, useState } from 'react';
import { GroupStatus } from 'shared-types';
import useGroupList from './_hooks/queries/useGroupList';
import GroupCard from './_components/GroupCard';
import useActiveGroupItem from './_stores/useActiveGroupItem';
import useColumnList from './_hooks/queries/useColumnList';
import CreateGroupDialog from './_components/CreateGroupDialog';
import UpdateColumnNameDialog from './_components/UpdateColumnNameDialog';
import useActiveColumnItem from './_stores/useActiveColumnItem';
import { IANA_TIMEZONES } from './_constants/timezones';
import getLocalPCTimezone from './_utils/timezone';

// const Columns = [
//   { id: 'init', name: '대기', status: 'INIT' },
//   { id: 'progress', name: '진행중', status: 'PROGRESS' },
//   { id: 'done', name: '완료', status: 'DONE' },
//   { id: 'pending', name: '보류', status: 'PENDING' },
// ] as const;

export default function AppIndexPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const closeModal = () => setIsModalOpen(false);
  const onModalOpen = () => setIsModalOpen(true);
  const {
    data: { columns: columnList },
    isError: isColumListError,
    isLoading: isColumnListLoading,
  } = useColumnList();
  const { data, isError: isGroupListError, isLoading } = useGroupList();
  const { resetId } = useActiveGroupItem();

  const [localPcTimezone, setLocalPcTimezone] = useState(() =>
    getLocalPCTimezone(),
  );

  const [isColumnModalOpen, setIsColumnModalOpen] = useState(false);
  const { setId } = useActiveColumnItem();
  const closeColumnModal = () => setIsColumnModalOpen(false);
  const openColumnModal = (id: string) => () => {
    setIsColumnModalOpen(true);
    setId(id);
  };

  const changeTimezone: ChangeEventHandler<HTMLSelectElement> = (e) => {
    const timezone = e.target.value;
    console.log('timezone', timezone);
    setLocalPcTimezone(timezone);
  };

  useEffect(() => {
    const outerElementClickHandler = (e: MouseEvent) => {
      e.stopPropagation();
      const target = e.target as HTMLElement;

      if (!target.closest('.setting')) {
        resetId();
      }
    };
    window.addEventListener('click', outerElementClickHandler);
  }, [resetId]);

  return (
    <Container>
      {(isColumListError || isGroupListError) && (
        <div>에러가 발생했습니다.</div>
      )}
      {(isLoading || isColumnListLoading) && <div>로딩중입니다.</div>}
      {!isLoading && data && (
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
                defaultValue={localPcTimezone}
              >
                {IANA_TIMEZONES.map((timezone) => (
                  <option key={timezone.label} value={timezone.timezone}>
                    {timezone.label}
                  </option>
                ))}
              </select>
            </div>
          </div>
          <GridView>
            {columnList.map((column) => {
              const currentGroup = column.status as GroupStatus;
              const key =
                currentGroup.toLowerCase() as keyof typeof data.groups;
              return (
                <div className="column" key={`group-${column.id}`}>
                  <h2
                    className="column-name"
                    onClick={openColumnModal(column.id)}
                  >
                    {column.name}
                  </h2>
                  <div className="column-contents">
                    {data?.groups[key].map(
                      ({ name, orderCount, createdAt, id }) => (
                        <GroupCard
                          key={`group-${id}-${id}`}
                          name={name}
                          count={orderCount}
                          createdAt={createdAt}
                          id={id}
                          status={column.status}
                        />
                      ),
                    )}
                  </div>
                </div>
              );
            })}
          </GridView>
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
