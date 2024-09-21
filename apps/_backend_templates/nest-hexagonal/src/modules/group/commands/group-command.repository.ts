import Group from '../../../domain/group/group';

export interface GroupCommandRepository {
  save(group: Group): Promise<{ groupId: string }>;
}
