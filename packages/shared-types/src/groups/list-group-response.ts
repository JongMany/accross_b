export type GroupStatus = 'INIT' | 'PROGRESS' | 'DONE' | 'PENDING';
export type Group = {
  id: string;
  name: string;
  orderCount: number;
  createdAt: number;
  status: GroupStatus;
};

export type ListGroup = {
  init: Array<Group>;
  progress: Array<Group>;
  done: Array<Group>;
  pending: Array<Group>;
};

export type ListGroupResponse = {
  groups: ListGroup;
};
