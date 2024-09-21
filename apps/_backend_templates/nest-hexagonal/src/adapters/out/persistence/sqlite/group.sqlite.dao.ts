import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { GroupEntity } from './group.entity';
import { InjectRepository } from '@nestjs/typeorm';
import Group from '../../../../domain/group/group';

@Injectable()
export class GroupSqliteDao {
  constructor(
    @InjectRepository(GroupEntity)
    private readonly repository: Repository<GroupEntity>,
  ) {
  }
  async list(): Promise<GroupEntity[]> {
    const groups = await this.repository.find();
    return groups;
  }

  async save(group: ReturnType<Group['toJSON']>): Promise<{ groupId: string }> {
    const groupEntity = this.repository.create(group);
    await this.repository.save(groupEntity);
    return {
      groupId: groupEntity.id,
    };
  }
}
