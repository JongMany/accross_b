import { ListColumnResponse } from 'shared-types';
import { useQuery } from '@tanstack/react-query';
import api from '../../api';

async function listColumns() {
  const { data } = await api.get<ListColumnResponse>('/columns');
  return data;
}

export default function useColumnList() {
  const query = useQuery<ListColumnResponse>({
    queryFn: listColumns,
    queryKey: ['columns'],
    initialData: {
      columns: [
        { id: '0', name: '대기', status: 'INIT' },
        { id: '1', name: '진행중', status: 'PROGRESS' },
        { id: '2', name: '완료', status: 'DONE' },
        { id: '3', name: '보류', status: 'PENDING' },
      ],
    },
  });
  return query;
}
