import { GroupCommandRepositoryAdapter } from './group-command.repository.adapter';
import Group from '../../../domain/group/group';

describe('adapters/out/persistence/group-command.repository.adapter', () => {
  const mockSave = jest.fn();
  const subject = new GroupCommandRepositoryAdapter({
    save: mockSave,
  } as any);

  describe('save', () => {
    it('should return group id from repository response', async () => {
      const groupEntity = { groupId: 'id-1' };
      mockSave.mockReturnValue(groupEntity);

      const result = await subject.save(new Group({ id: 'id-1', name: 'name', orderCount: 1, createdAt: new Date() }));

      expect(result).toEqual({ groupId: 'id-1' });
    });
  });

});
