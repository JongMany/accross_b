import { GroupStatus } from '../groups/list-group-response';

export type ListColumnResponse = {
  columns: {
    id: string;
    name: string;
    status: GroupStatus;
  }[];
};
