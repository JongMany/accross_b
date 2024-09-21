import { CreateGroupDto } from './create-group.dto';

describe('groups/dto/create-group.dto', () => {
  it('should has name, orderCount', () => {
    const createGroupDto = new CreateGroupDto({ name: 'name', orderCount: 1 });
    expect(createGroupDto).toEqual({ name: 'name', orderCount: 1 });
  });
});
