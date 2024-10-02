import {
  DndContext,
  DragEndEvent,
  DragOverEvent,
  KeyboardSensor,
  TouchSensor,
  useSensor,
  useSensors,
} from '@dnd-kit/core';
import React, { PropsWithChildren, useState } from 'react';
import { Group, GroupStatus, ListGroup } from 'shared-types';
import { sortableKeyboardCoordinates } from '@dnd-kit/sortable';
import { toast } from 'react-toastify';
import { getNextStatus } from '../_utils/column';
import useActiveGroupItemModal from '../_stores/useActiveGroupItemModal';
import { MouseSensor } from '../_utils/dnd';
import useUpdateGroupStatus from '../_hooks/mutations/useUpdateGroupStatus';

type Props = {
  groupList: ListGroup;
  currentGroupList: ListGroup;
  changeGroupList: (groupList: ListGroup) => void;
};
export default function DndContainer({
  children,
  groupList,
  currentGroupList,
  changeGroupList,
}: PropsWithChildren<Props>) {
  const { id: activeGroupItemModalId, resetId: resetGroupItemModalId } =
    useActiveGroupItemModal();
  const { mutate: updateGroupStatus } = useUpdateGroupStatus();

  const sensors = useSensors(
    useSensor(MouseSensor),
    useSensor(TouchSensor),
    useSensor(KeyboardSensor, {
      coordinateGetter: sortableKeyboardCoordinates,
    }),
  );

  const dragStartHandler = () => {
    if (activeGroupItemModalId) {
      resetGroupItemModalId();
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

    const activeGroup = flatGroupList.find(
      (group) => group.id === activeId,
    ) as Group;

    // 모든 컬럼에서 activeGroup 제거
    const updatedGroupList = Object.keys(currentGroupList).reduce(
      (acc, key) => {
        acc[key as keyof ListGroup] = currentGroupList[
          key as keyof ListGroup
        ].filter((group) => group.id !== activeId);
        return acc;
      },
      {} as ListGroup,
    );

    // overColumn에 activeGroup 추가
    updatedGroupList[overColumn] = [
      ...updatedGroupList[overColumn],
      { ...activeGroup, status: overId },
    ];
    changeGroupList(updatedGroupList);
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
      changeGroupList(groupList);
      toast.error('이동할 수 없는 그룹입니다.', {
        autoClose: 2000,
      });
    }
  };
  return (
    <DndContext
      sensors={sensors}
      onDragStart={dragStartHandler}
      onDragOver={dragOverHandler}
      onDragEnd={dragEndHandler}
    >
      {children}
    </DndContext>
  );
}
