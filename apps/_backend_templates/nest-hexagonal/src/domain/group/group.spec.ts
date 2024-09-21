import Group from './group';

describe('domain/groups/groups', () => {
  describe('create', () => {
    it('should return created Group', () => {
      expect(Group.create({ name: 'created group', orderCount: 3 })).toEqual({
        id: expect.any(String),
        name: 'created group',
        orderCount: 3,
        createdAt: expect.any(Date),
        status: 'INIT',
        domainEvents: [],
      });
    });
  });
  describe('toJSON', () => {
    it('should return JSON format', () => {
      const group = Group.create({ name: 'created group', orderCount: 3 });
      expect(group.toJSON()).toEqual({
        id: expect.any(String),
        name: 'created group',
        orderCount: 3,
        createdAt: expect.any(Number),
        status: 'INIT',
      });
    });
  });
});