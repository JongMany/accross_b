import { GroupStatus, ListColumnResponse } from 'shared-types';
import { rootQueryClient } from '../../../root-query-client';

export function getNextStatus(currentStatus: GroupStatus) {
  switch (currentStatus) {
    case 'INIT':
      return 'PROGRESS';
    case 'PROGRESS':
      return 'DONE';
    case 'DONE':
      return 'PENDING';
    case 'PENDING':
      return 'INIT';
    default:
      throw new Error('Invalid status');
  }
}

export function getPrevStatus(currentStatus: GroupStatus) {
  switch (currentStatus) {
    case 'INIT':
      return 'PENDING';
    case 'PROGRESS':
      return 'INIT';
    case 'DONE':
      return 'PROGRESS';
    case 'PENDING':
      return 'DONE';
    default:
      throw new Error('Invalid status');
  }
}

export function convertStatusToKorean(status: GroupStatus | null) {
  const columns = rootQueryClient.getQueryData<ListColumnResponse>(['columns']);

  if (status === null || columns === undefined) {
    return null;
  }
  switch (status) {
    case 'DONE':
      return columns.columns[2].name;
    case 'PENDING':
      return columns.columns[3].name;
    case 'PROGRESS':
      return columns.columns[1].name;
    case 'INIT':
      return columns.columns[0].name;
    default:
      throw new Error('Invalid status');
  }
}
