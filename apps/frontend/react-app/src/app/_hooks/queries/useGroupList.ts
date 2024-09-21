import { useQuery } from '@tanstack/react-query';
import type { Group, ListGroupResponse } from 'shared-types';
import api from '../../api';

const initialGroupList = {
  groups: {
    done: [] as Group[],
    init: [] as Group[],
    pending: [] as Group[],
    progress: [] as Group[],
  },
};

async function listGroups() {
  const { data } = await api.get<ListGroupResponse>('/groups');
  return data;
}

export default function useGroupList() {
  const query = useQuery<ListGroupResponse>({
    queryFn: listGroups,
    queryKey: ['groups'],
    initialData: initialGroupList,
  });
  return query;
}
