import { InjectRepository } from '@nestjs/typeorm';
import { CreateGroupUseCase } from '../port/in/create-group.usecase';
import { GroupEntity } from '../../entities/group.entity';
import { Repository } from 'typeorm';
import { CreateGroupDto } from '../../dto/create-group.dto';
import { CreateGroupResponse } from 'shared-types/src/groups/create-group-response';
import { Injectable } from '@nestjs/common';

@Injectable()
export class CreateGroupService implements CreateGroupUseCase {
  constructor(
    @InjectRepository(GroupEntity)
    private readonly repository: Repository<GroupEntity>,
  ) {}
  async createGroup(
    createGroupDto: CreateGroupDto,
  ): Promise<CreateGroupResponse> {
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
}
