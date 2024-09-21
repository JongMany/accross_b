import { Injectable, Logger } from '@nestjs/common';
import { CreateGroupDto } from './dto/create-group.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { GroupEntity, GroupStatus } from './entities/group.entity';

@Injectable()
export class GroupsService {
  constructor(
    @InjectRepository(GroupEntity)
    private readonly repository: Repository<GroupEntity>,
  ) {}
  async create(createGroupDto: CreateGroupDto): Promise<{ groupId: string }> {
    const group = this.repository.create({
      name: createGroupDto.name,
      orderCount: createGroupDto.orderCount,
      createdAt: Date.now(),
      status: 'INIT',
    });
    await this.repository.save(group);
    return {
      groupId: group.id,
    };
  }

  async list() {
    const groups = await this.repository.find();
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
