import { useMutation } from '@tanstack/react-query';

import { UpdateGroupResponse } from 'shared-types';
import { rootQueryClient } from '../../../root-query-client';
import api from '../../api';
import useActiveGroupItemModal from '../../_stores/useActiveGroupItemModal';

async function updateGroupState(groupId: string) {
  const { data } = await api.put<UpdateGroupResponse>(`/groups/${groupId}`);
  return data;
}

export default function useUpdateGroupStatus() {
  const { resetId } = useActiveGroupItemModal();
  return useMutation({
    mutationFn: (id: string) => updateGroupState(id),
    onSuccess: () => {
      resetId();
      // TODO: Optimistic Update
      rootQueryClient.invalidateQueries({
        queryKey: ['groups'],
      });
    },
  });
}
