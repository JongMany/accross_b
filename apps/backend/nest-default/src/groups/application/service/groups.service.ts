import { Injectable, Logger } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';

import { Repository } from 'typeorm';
import { GroupEntity } from '../../entities/group.entity';
import { CreateGroupDto } from '../../dto/create-group.dto';
import { GroupStatus } from 'shared-types';

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
    groups.sort(
      (a, b) => a.createdAt - b.createdAt || a.orderCount - b.orderCount || 0,
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

  async updateToNextStatus(groupId: string) {
    const group = await this.repository.findOne({
      where: {
        id: groupId,
      },
    });
    if (!group) {
      return {
        status: '해당 그룹이 존재하지 않습니다.',
        statusCode: 404,
        message: 'failure',
      };
    }
    const statusOrder = ['INIT', 'PROGRESS', 'DONE', 'PENDING'] as const;
    const currentIndex = statusOrder.indexOf(group.status);
    if (currentIndex === -1) {
      throw new Error('Invalid status');
    }
    const nextStatus = statusOrder[(currentIndex + 1) % 4];
    if (!nextStatus) {
      return {
        status: 'NEXT STATUS가 올바르지 않습니다.',
        statusCode: 400,
        message: 'failure',
      };
    }
    // 그룹의 상태를 nextStatus로 업데이트
    group.status = nextStatus;

    // 변경 사항을 데이터베이스에 저장
    await this.repository.save(group);
    return {
      status: nextStatus,
      message: 'success',
      statusCode: 201,
    };
  }

  async deleteGroup(groupId: string) {
    const group = await this.repository.findOne({
      where: {
        id: groupId,
      },
    });
    if (!group) {
      return {
        status: '해당 그룹이 존재하지 않습니다.',
        statusCode: 404,
        message: 'failure',
      };
    }
    await this.repository.delete({ id: groupId });
    // TODO: 성공 여부에 따라 응답을 다르게 처리
    return {
      status: 'success',
      statusCode: 200,
      message: 'success',
    };
  }
}
