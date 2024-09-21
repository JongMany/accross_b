import styled from '@emotion/styled';
import { GroupStatus } from 'shared-types';

const GroupCardModalContainer = styled.div`
  position: absolute;
  z-index: 1;
  padding: 4px;
  width: 103px;
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
    width: 76px;
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
  console.log(id);

  return (
    <GroupCardModalContainer>
      {nextStatus && <span>{convertStatusToKorean(nextStatus)} 이동</span>}
      {currentStatus === 'PENDING' && <span>삭제</span>}
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
      // return null;
      return 'INIT';
    // case 'PENDING':
    //   return 'PROGRESS';
    // case 'PROGRESS':
    //   return ['DONE', 'PENDING'];
    // case 'DONE':
    //   return null;
    default:
      throw new Error('Invalid status');
  }
}

function convertStatusToKorean(status: GroupStatus | null) {
  if (status === null) {
    return null;
  }
  switch (status) {
    case 'DONE':
      return '완료로';
    case 'PENDING':
      return '보류로';
    case 'PROGRESS':
      return '진행중으로';
    case 'INIT':
      return '대기로';
    default:
      throw new Error('Invalid status');
  }
}

export default GroupCardModal;
