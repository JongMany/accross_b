import { Injectable } from '@nestjs/common';
import { UpdateGroupStatusUseCase } from '../port/in/update-group-status.usecase';
import { InjectRepository } from '@nestjs/typeorm';
import { GroupEntity } from '../../entities/group.entity';
import { Repository } from 'typeorm';

@Injectable()
export class UpdateGroupStatusService implements UpdateGroupStatusUseCase {
  constructor(
    @InjectRepository(GroupEntity)
    private readonly repository: Repository<GroupEntity>,
  ) {}
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
}
