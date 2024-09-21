import { useQuery } from '@tanstack/react-query';
import type { Group, GroupStatus, ListGroupResponse } from 'shared-types';
// import api from '../../api';

const makeGroupItem = ({
  name,
  orderCount,
  createdAt,
  id,
  status,
}: {
  name: string;
  orderCount: number;
  createdAt: number;
  id: string;
  status: GroupStatus;
}): Group => ({
  name,
  orderCount,
  createdAt,
  id,
  status,
});

const initialGroupList = {
  groups: {
    done: [
      makeGroupItem({
        name: '완료',
        orderCount: 0,
        createdAt: 0,
        id: '0',
        status: 'DONE',
      }),
    ] as Group[],
    init: [] as Group[],
    pending: [
      makeGroupItem({
        name: '보류',
        orderCount: 0,
        createdAt: 0,
        id: '1',
        status: 'PENDING',
      }),
    ] as Group[],
    progress: [] as Group[],
  },
};

async function listGroups() {
  // const { data } = await api.get('/groups');
  // return data;
  return initialGroupList;
}

export default function useGroupList() {
  const query = useQuery<ListGroupResponse>({
    queryFn: listGroups,
    queryKey: ['groups'],
    initialData: initialGroupList,
  });
  return query;
}
