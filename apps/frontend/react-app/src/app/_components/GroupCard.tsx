import styled from '@emotion/styled';
import { GroupStatus } from 'shared-types';
import { useSortable } from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';
import GroupItem from './GroupItem';

export default function GroupCard(props: {
  name: string;
  count: number;
  createdAt: number;
  id: string;
  status: GroupStatus;
}) {
  const {
    attributes,
    listeners,
    setNodeRef,
    transform,
    transition,
    isDragging,
  } = useSortable({ id: props.id });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
    opacity: isDragging ? 0.5 : 1,
    zIndex: isDragging ? 999 : 1,
  };

  return (
    <Card style={style} {...attributes} {...listeners} ref={setNodeRef}>
      <GroupItem {...props} />
    </Card>
  );
}

const Card = styled.div`
  height: 120px;
  background: #fff;
  border-radius: 8px;
  cursor: pointer;
  user-select: none;
  /* overflow: hidden; */

  .date {
    height: 16px;
    background: #b692f6;
    color: #fff;
    font-size: 10px;
    padding-left: 12px;
    line-height: 16px;
    display: flex;
    align-items: center;
    gap: 4px;
  }

  .group-name {
    font-size: 12px;
    color: #261c4c;
    line-height: 18px;
    font-weight: 700;
  }
  .wrapper {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 32px;

    .order-count {
      height: 28px;
      color: #261c4c;
      font-size: 20px;
      font-weight: 900;
      line-height: 24px;
      display: flex;
      align-items: center;
      span {
        margin-left: 6px;
        font-size: 16px;
      }
    }

    .setting {
      width: 28px;
      height: 28px;
      display: flex;
      justify-content: center;
      align-items: center;
      background: #f9f5ff;
      border-radius: 4px;
      cursor: pointer;
      font-size: 20px;
      position: relative;
      z-index: 100;
    }
  }
`;
