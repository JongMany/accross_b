type Group = {
  id: string,
  name: string,
  orderCount: number,
  createdAt: number,
  status: 'INIT' | 'PROGRESS' | 'DONE' | 'PENDING',
};
export type ListGroupResponse = {
  groups: {
    init: Array<Group>,
    progress: Array<Group>,
    done: Array<Group>,
    pending: Array<Group>,
  },
};