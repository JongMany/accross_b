import { BadRequestException } from '@nestjs/common';
import { CreateGroupCommand, CreateGroupCommandHandler } from './create-group-command';

describe('modules/groups/commands/create-groups-command', () => {
  describe('CreateGroupCommand', () => {
    it.each([
      [{ name: '', orderCount: 1 }],
      [{ name: 'a' }],
    ])('should throw BadRequestException when name or orderCount is empty', (data) => {
      expect(() => new CreateGroupCommand(data as any)).toThrow(BadRequestException);
    });
  });
  describe('CreateGroupCommandHandler', () => {
    const repository = {
      save: jest.fn().mockResolvedValue({ id: '1' }),
    };
    const subject = new CreateGroupCommandHandler(repository as any);

    describe('execute', () => {
      it('should save groups and return repository response', () => {
        expect(subject.execute(new CreateGroupCommand({ name: 'a', orderCount: 1 }))).resolves.toEqual({ id: '1' });
      });
    });
  });
});