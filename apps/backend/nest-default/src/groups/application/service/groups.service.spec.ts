import { GroupEntity } from 'src/groups/entities/group.entity';
import { GroupsService } from './groups.service';

describe('GroupsService', () => {
  const mockCreate = jest.fn();
  const mockSave = jest.fn();
  const mockFind = jest.fn();

  const subject = new GroupsService({
    create: mockCreate,
    save: mockSave,
    find: mockFind,
  } as any);

  describe('create', () => {
    it('should be save with created entity', async () => {
      mockCreate.mockReturnValueOnce({ id: 'new-group-id', value: '' });
      const group = new GroupEntity();
      const { groupId } = await subject.create(group);
      expect(mockSave).toBeCalledWith({ id: 'new-group-id', value: '' });
      expect(groupId).toEqual('new-group-id');
    });
  });
  describe('list', () => {
    it('should return classified list by status (INIT, PROGRESS, DONE, PENDING)', async () => {
      mockFind.mockReturnValueOnce([
        { id: 'id-1', status: 'INIT' },
        { id: 'id-2', status: 'PROGRESS' },
        { id: 'id-3', status: 'DONE' },
        { id: 'id-4', status: 'PENDING' },
      ]);
      const { groups } = await subject.list();
      expect(groups).toEqual({
        init: [{ id: 'id-1', status: 'INIT' }],
        progress: [{ id: 'id-2', status: 'PROGRESS' }],
        done: [{ id: 'id-3', status: 'DONE' }],
        pending: [{ id: 'id-4', status: 'PENDING' }],
      });
    });
    it('should return empty list when status is not INIT or PROGRESS or DONE or PENDING', () => {
      mockFind.mockReturnValueOnce([{ id: 'id-1', status: 'INVALID' }]);
      expect(subject.list()).resolves.toEqual({
        groups: {
          init: [],
          progress: [],
          done: [],
          pending: [],
        },
      });
    });
    it('should return empty list when repository is reponse empty array', () => {
      mockFind.mockReturnValueOnce([]);
      expect(subject.list()).resolves.toEqual({
        groups: {
          init: [],
          progress: [],
          done: [],
          pending: [],
        },
      });
    });
  });
});
