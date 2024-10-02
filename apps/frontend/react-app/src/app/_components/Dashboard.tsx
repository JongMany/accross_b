import styled from '@emotion/styled';
import React, { useEffect, useState } from 'react';
import { GroupStatus, ListGroup } from 'shared-types';

import { css } from '@emotion/react';
import useModal from '../_hooks/commons/useModal';
import useActiveColumnItem from '../_stores/useActiveColumnItem';
import useActiveGroupItemModal from '../_stores/useActiveGroupItemModal';
import TimezoneSelector from './TimezoneSelector';
import Column from './Column';
import CreateGroupDialog from './CreateGroupDialog';
import UpdateColumnNameDialog from './UpdateColumnNameDialog';
import DndContainer from './DndContainer';

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

  const [currentGroupList, setCurrentGroupList] = useState(groupList);
  const changeCurrentGroup = (listGroup: ListGroup) => {
    setCurrentGroupList(listGroup);
  };
  useEffect(() => {
    setCurrentGroupList(groupList);
  }, [groupList]);

  const { resetId: resetGroupItemModalId } = useActiveGroupItemModal();

  // 설정 모달은 클릭가능하도록 설정
  useEffect(() => {
    const outerElementClickHandler = (e: MouseEvent) => {
      e.stopPropagation();
      const target = e.target as HTMLElement;

      if (!target.closest('.setting')) {
        resetGroupItemModalId();
      }
    };
    window.addEventListener('click', outerElementClickHandler);
  }, [resetGroupItemModalId]);

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

        <DndContainer
          groupList={groupList}
          currentGroupList={currentGroupList}
          changeGroupList={changeCurrentGroup}
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
        </DndContainer>
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
