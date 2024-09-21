import { Injectable } from '@nestjs/common';
import { GroupQueryRepository } from '../../../modules/group/queries/group-query.repository';
import Group from '../../../domain/group/group';
import { GroupSqliteDao } from './sqlite/group.sqlite.dao';


@Injectable()
export class GroupQueryRepositoryAdapter implements GroupQueryRepository {
  constructor(
    private readonly sqliteDAO: GroupSqliteDao,
  ) {
  }

  async list(): Promise<Array<ReturnType<Group['toJSON']>>> {
    const list = await this.sqliteDAO.list() ?? [];
    return list.map((g) => ({
      id: g.id,
      name: g.name,
      status: g.status,
      createdAt: g.createdAt,
      orderCount: g.orderCount,
    }));
  }
}
