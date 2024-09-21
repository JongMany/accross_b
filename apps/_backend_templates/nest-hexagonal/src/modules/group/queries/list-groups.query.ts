import { IQuery, IQueryHandler, QueryHandler } from '@nestjs/cqrs';
import { Inject } from '@nestjs/common';
import { GroupQueryRepository } from './group-query.repository';
import Group, { GroupStatus } from '../../../domain/group/group';

export class ListGroupsQuery implements IQuery {
  constructor() {}
}

export type ListTicketsQueryResult = {
  groups: {
    init: Array<ReturnType<Group['toJSON']>>,
    progress: Array<ReturnType<Group['toJSON']>>,
    done: Array<ReturnType<Group['toJSON']>>,
    pending: Array<ReturnType<Group['toJSON']>>,
  },
}

@QueryHandler(ListGroupsQuery)
export class ListGroupsQueryHandler
implements IQueryHandler<ListGroupsQuery, ListTicketsQueryResult>
{
  constructor(
    @Inject('GroupQueryRepository')
    private readonly repository: GroupQueryRepository,
  ) {
  }

  async execute(query: ListGroupsQuery) {
    const list = await this.repository.list();
    const handleStatus: (GroupStatus | string)[] = ['INIT', 'PROGRESS', 'DONE', 'PENDING'];
    return {
      groups: list.reduce((acc, next) => {
        if (handleStatus.includes(next.status)) {
          acc[next.status.toLowerCase()].push(next);
        } else {
          console.log('has not handle status', next.status, 'id: ', next.id);
        }
        return acc;
      }, {
        init: [],
        progress: [],
        done: [],
        pending: [],
      }),
    };
  }
}
