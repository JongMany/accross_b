import { GroupQueryRepositoryAdapter } from './group-query.repository.adapter';

describe('adapters/out/persistence/groups-query.repository.adapter', () => {
  describe('GroupQueryRepositoryAdapter', () => {
    const mockList = jest.fn();
    const sqliteDAO = {
      list: mockList,
    };
    const subject = new GroupQueryRepositoryAdapter(sqliteDAO as any);
    describe('list', () => {
      it('should return empty array when sqliteDAO is response undefined', async () => {
        mockList.mockResolvedValue(undefined);
        const res = await subject.list();
        expect(res).toEqual([]);
      });
      it('should return sqliteDAO list response', async () => {
        mockList.mockResolvedValue([{ id: '1', name: 'a', status: 'INIT', createdAt: 1111, orderCount: 1 }]);
        const res = await subject.list();
        expect(res).toEqual([{ id: '1', name: 'a', status: 'INIT', createdAt: 1111, orderCount: 1 }]);
      });
    });
  });
});
