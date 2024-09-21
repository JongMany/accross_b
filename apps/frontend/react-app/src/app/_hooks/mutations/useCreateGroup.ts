import { useMutation } from '@tanstack/react-query';

import { CreateGroupResponse } from 'shared-types/src/groups/create-group-response';
import { rootQueryClient } from '../../../root-query-client';
import api from '../../api';

async function createGroup({
  groupName,
  orderCount,
}: {
  groupName: string;
  orderCount: number;
}) {
  const { data } = await api.post<CreateGroupResponse>('/groups', {
    groupName,
    orderCount,
  });
  return data;
}

export default function useCreateGroup() {
  return useMutation({
    mutationFn: createGroup,
    onSuccess: () =>
      rootQueryClient.invalidateQueries({
        queryKey: ['groups'],
      }),
  });
}
