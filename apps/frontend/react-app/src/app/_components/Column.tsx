import React from 'react';
import { GroupStatus, ListGroup } from 'shared-types';
import { useDroppable } from '@dnd-kit/core';
import { SortableContext, rectSortingStrategy } from '@dnd-kit/sortable';
import GroupCard from './GroupCard';

type Props = {
  column: {
    id: string;
    name: string;
    status: GroupStatus;
  };
  groupList: ListGroup;
  openColumnModal: () => void;
};
function Column({ column, groupList, openColumnModal }: Props) {
  const currentGroup = column.status as GroupStatus;
  const key = currentGroup.toLowerCase() as keyof ListGroup;
  const { setNodeRef } = useDroppable({ id: column.status });

  return (
    <div className="column" key={`group-${column.id}`}>
      <h2 className="column-name" onClick={openColumnModal}>
        {column.name}
      </h2>
      <SortableContext
        items={groupList[key]}
        id={column.id}
        strategy={rectSortingStrategy}
      >
        <div
          className="column-contents droppable"
          id={column.status}
          ref={setNodeRef}
        >
          {groupList[key].map(({ name, orderCount, createdAt, id }) => (
            <GroupCard
              key={`group-${column.id}-${id}`}
              name={name}
              count={orderCount}
              createdAt={createdAt}
              id={id}
              status={column.status}
            />
          ))}
        </div>
      </SortableContext>
    </div>
  );
}

export default Column;
