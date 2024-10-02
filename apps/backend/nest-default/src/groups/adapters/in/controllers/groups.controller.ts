import {
  Controller,
  Get,
  Post,
  Body,
  HttpCode,
  HttpStatus,
  BadRequestException,
  Put,
  Delete,
  Param,
} from '@nestjs/common';

import {
  DeleteGroupResponse,
  ListGroupResponse,
  UpdateGroupResponse,
} from 'shared-types';
import { CreateGroupResponse } from 'shared-types/src/groups/create-group-response';
import { CreateGroupDto } from '../../../dto/create-group.dto';
import { CreateGroupUseCase } from '../../../application/port/in/create-group.usecase';
import { GetGroupListUseCase } from '../../../application/port/in/get-group-list.usecase';
import { UpdateGroupStatusUseCase } from '../../../application/port/in/update-group-status.usecase';
import { DeleteGroupUseCase } from '../../../application/port/in/delete-group.usecase';

@Controller('groups')
export class GroupsController {
  constructor(
    private readonly createGroupUseCase: CreateGroupUseCase,
    private readonly getGroupListUseCase: GetGroupListUseCase,
    private readonly updateGroupStatusUseCase: UpdateGroupStatusUseCase,
    private readonly deleteGroupUseCase: DeleteGroupUseCase,
  ) {}

  @Get()
  @HttpCode(HttpStatus.OK)
  async list(): Promise<ListGroupResponse> {
    return this.getGroupListUseCase.getGroupList();
  }

  @Post()
  @HttpCode(HttpStatus.OK)
  async create(
    @Body('groupName') groupName?: string,
    @Body('orderCount') orderCount?: number,
  ): Promise<CreateGroupResponse> {
    if (!groupName || orderCount === undefined || orderCount < -1) {
      throw new BadRequestException('Missing groupName or orderCount');
    }
    const { groupId } = await this.createGroupUseCase.createGroup(
      new CreateGroupDto({
        name: groupName,
        orderCount,
      }),
    );
    return {
      groupId,
    };
  }

  @Put('/:groupId')
  @HttpCode(HttpStatus.OK)
  async updateToNextStatus(
    @Param('groupId') groupId: string,
  ): Promise<UpdateGroupResponse> {
    return this.updateGroupStatusUseCase.updateToNextStatus(groupId);
  }

  @Delete('/:groupId')
  @HttpCode(HttpStatus.OK)
  async deleteGroup(
    @Param('groupId') groupId: string,
  ): Promise<DeleteGroupResponse> {
    return this.deleteGroupUseCase.deleteGroup(groupId);
  }
}
