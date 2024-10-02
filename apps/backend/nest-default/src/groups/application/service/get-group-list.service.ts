import { InjectRepository } from '@nestjs/typeorm';
import { GetGroupListUseCase } from '../port/in/get-group-list.usecase';
import { GroupEntity } from '../../entities/group.entity';
import { Repository } from 'typeorm';
import { GroupStatus } from 'shared-types';
import { Injectable, Logger } from '@nestjs/common';

@Injectable()
export class GetGroupListService implements GetGroupListUseCase {
  constructor(
    @InjectRepository(GroupEntity)
    private readonly repository: Repository<GroupEntity>,
  ) {}
  async getGroupList() {
    const groups = await this.repository.find();
    groups.sort(
      (a, b) => b.createdAt - a.createdAt || a.orderCount - b.orderCount || 0,
    );

    const handleStatus: (GroupStatus | string)[] = [
      'INIT',
      'PROGRESS',
      'DONE',
      'PENDING',
    ];
    return {
      groups: groups.reduce(
        (acc, next) => {
          if (handleStatus.includes(next.status)) {
            acc[next.status.toLowerCase()].push(next);
          } else {
            Logger.log('has not handle status', next.status, 'id: ', next.id);
          }
          return acc;
        },
        {
          init: [],
          progress: [],
          done: [],
          pending: [],
        },
      ),
    };
  }
}
