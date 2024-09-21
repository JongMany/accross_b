import { useQuery } from '@tanstack/react-query';
import { ListGroupResponse } from 'shared-types';
import api from '../../api';

async function listGroups() {
  const { data } = await api.get('/groups');
  return data;
}

export default function useGroupList() {
  const query = useQuery<ListGroupResponse>({
    queryFn: listGroups,
    queryKey: ['groups'],
  });
  return query;
}
