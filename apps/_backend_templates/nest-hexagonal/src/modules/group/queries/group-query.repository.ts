import Group from '../../../domain/group/group';

export interface GroupQueryRepository {
  list(): Promise<Array<ReturnType<Group['toJSON']>>>;
}
