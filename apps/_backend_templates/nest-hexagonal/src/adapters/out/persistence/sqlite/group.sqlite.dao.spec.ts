import { GroupSqliteDao } from './group.sqlite.dao';

describe('adapters/out/persistence/sqlite/group.sqlite.dao', () => {
  const mockFind = jest.fn();
  const mockCreate = jest.fn();
  const mockSave = jest.fn();
  const subject = new GroupSqliteDao({
    find: mockFind,
    create: mockCreate,
    save: mockSave,
  } as any);

  describe('list', () => {
    it('should return groups from repository response', async () => {
      const groups = [{ id: 'id-1' }];
      mockFind.mockResolvedValue(groups);

      const result = await subject.list();

      expect(result).toEqual(groups);
    });
  });
  describe('save', () => {
    it('should return group id from repository response', async () => {
      const groupEntity = { id: 'id-1' };
      mockCreate.mockReturnValue(groupEntity);

      const result = await subject.save({ id: 'id-1' } as any);

      expect(result).toEqual({ groupId: 'id-1' });
    });
  });
});
