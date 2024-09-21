import { ListGroupsQuery, ListGroupsQueryHandler } from './list-groups.query';

describe('modules/groups/queries/list-groups.query', () => {
  describe('ListGroupsQueryHandler', () => {
    const repository = {
      list: jest.fn().mockResolvedValue({ response: 'response' }),
    };
    const subject = new ListGroupsQueryHandler(repository as any);

    it('should return classified list by status (INIT, PROGRESS, DONE, PENDING)', async () => {
      repository.list.mockResolvedValue([{ id: '0001', status: 'INIT' }, { id: '0002', status: 'PROGRESS' }, { id: '0003', status: 'DONE' }, { id: '0004', status: 'PENDING' }]);
      const res = await subject.execute(new ListGroupsQuery());
      expect(res).toEqual({ groups: { init: [{ id: '0001', status: 'INIT' }], progress: [{ id: '0002', status: 'PROGRESS' }], done: [{ id: '0003', status: 'DONE' }], pending: [{ id: '0004', status: 'PENDING' }] } });
    });
    it('should return empty array when repository is response undefined', async () => {
      repository.list.mockResolvedValue([]);
      const res = await subject.execute(new ListGroupsQuery());
      expect(res).toEqual({ groups: { init: [], progress: [], done: [], pending: [] } });
    });
  });
});
