import { Injectable } from '@nestjs/common';
import { GroupCommandRepository } from '../../../modules/group/commands/group-command.repository';
import { GroupSqliteDao } from './sqlite/group.sqlite.dao';
import Group from '../../../domain/group/group';

@Injectable()
export class GroupCommandRepositoryAdapter implements GroupCommandRepository {
  constructor(
    private readonly sqliteDAO: GroupSqliteDao,
  ) {
  }

  async save(group: Group): Promise<{ groupId: string }> {
    return this.sqliteDAO.save(group.toJSON());
  }
}
