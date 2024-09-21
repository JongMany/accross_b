import styled from '@emotion/styled';
import { GroupStatus, ListColumnResponse } from 'shared-types';
import { useEffect } from 'react';
import { toast } from 'react-toastify';
import { rootQueryClient } from '../../root-query-client';
import useUpdateGroupStatus from '../_hooks/mutations/useUpdateGroupStatus';
import useDeleteGroup from '../_hooks/mutations/useDeleteGroup';

const GroupCardModalContainer = styled.div`
  position: absolute;
  z-index: 1;
  padding: 4px;
  min-width: 103px;
  top: 100%;
  right: 0;
  border-radius: 8px;
  border: 1px solid #eaecf0;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  gap: 8px;
  background-color: white;

  span {
    text-align: center;
    padding: 0 12px;
    min-width: 90px;
    height: 38px;
    border-radius: 6px;
    font-size: 12px;
    line-height: 18px;
    color: #101828;
    cursor: pointer;
    transition: background-color 0.2s;
    display: flex;
    align-items: center;
    &:hover {
      background-color: #f9f5ff;
    }
  }
`;

type Props = {
  id: string;
  currentStatus: GroupStatus;
};
function GroupCardModal({ id, currentStatus }: Props) {
  const nextStatus = getNextStatus(currentStatus);
  const { mutate: updateGroupStatus, isError } = useUpdateGroupStatus();
  const { mutate: deleteGroup } = useDeleteGroup();

  const moveToNextStatusHandler = () => {
    updateGroupStatus(id);
  };

  const deleteGroupHandler = () => {
    deleteGroup(id);
  };

  useEffect(() => {
    if (isError) {
      toast('에러가 발생했습니다.', { type: 'error', autoClose: 3000 });
    }
  }, [isError]);

  return (
    <GroupCardModalContainer>
      {nextStatus && (
        <span onClick={moveToNextStatusHandler}>
          {convertStatusToKorean(nextStatus)}(으)로 이동
        </span>
      )}
      {currentStatus === 'PENDING' && (
        <span onClick={deleteGroupHandler}>삭제</span>
      )}
    </GroupCardModalContainer>
  );
}

function getNextStatus(currentStatus: GroupStatus) {
  switch (currentStatus) {
    case 'INIT':
      return 'PROGRESS';
    case 'PROGRESS':
      return 'DONE';
    case 'DONE':
      return 'PENDING';
    case 'PENDING':
      return 'INIT';
    default:
      throw new Error('Invalid status');
  }
}

function convertStatusToKorean(status: GroupStatus | null) {
  const columns = rootQueryClient.getQueryData<ListColumnResponse>(['columns']);

  if (status === null || columns === undefined) {
    return null;
  }
  switch (status) {
    case 'DONE':
      return columns.columns[2].name;
    case 'PENDING':
      return columns.columns[3].name;
    case 'PROGRESS':
      return columns.columns[1].name;
    case 'INIT':
      return columns.columns[0].name;
    default:
      throw new Error('Invalid status');
  }
}

export default GroupCardModal;
