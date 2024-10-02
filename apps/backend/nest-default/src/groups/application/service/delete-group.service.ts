import { InjectRepository } from '@nestjs/typeorm';
import { DeleteGroupUseCase } from '../port/in/delete-group.usecase';
import { GroupEntity } from '../../entities/group.entity';
import { Repository } from 'typeorm';
import { Injectable } from '@nestjs/common';

@Injectable()
export class DeleteGroupService implements DeleteGroupUseCase {
  constructor(
    @InjectRepository(GroupEntity)
    private readonly repository: Repository<GroupEntity>,
  ) {}

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
