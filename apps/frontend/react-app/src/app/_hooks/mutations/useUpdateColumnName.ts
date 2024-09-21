import { useMutation } from '@tanstack/react-query';

import { UpdateGroupResponse } from 'shared-types';
import { rootQueryClient } from '../../../root-query-client';
import api from '../../api';
import useActiveColumnItem from '../../_stores/useActiveColumnItem';

async function updateColumName({
  columnId,
  name,
}: {
  columnId: string;
  name: string;
}) {
  const { data } = await api.put<UpdateGroupResponse>(`/columns/${columnId}`, {
    name,
  });
  return data;
}

export default function useUpdateColumnName() {
  const { resetId } = useActiveColumnItem();
  return useMutation({
    mutationFn: ({ columnId, name }: { columnId: string; name: string }) =>
      updateColumName({
        columnId,
        name,
      }),
    onSuccess: () => {
      resetId();
      // TODO: Optimistic Update
      rootQueryClient.invalidateQueries({
        queryKey: ['columns'],
      });
    },
  });
}
