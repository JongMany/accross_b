import {
  Controller,
  Get,
  Post,
  Body,
  HttpCode,
  HttpStatus,
  BadRequestException,
} from '@nestjs/common';
import { GroupsService } from './groups.service';
import { CreateGroupDto } from './dto/create-group.dto';
import { ListGroupResponse } from 'shared-types';
import { CreateGroupResponse } from 'shared-types/src/groups/create-group-response';

@Controller('groups')
export class GroupsController {
  constructor(private readonly groupsService: GroupsService) {}

  @Get()
  @HttpCode(HttpStatus.OK)
  async list(): Promise<ListGroupResponse> {
    return this.groupsService.list();
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
    const { groupId } = await this.groupsService.create(
      new CreateGroupDto({
        name: groupName,
        orderCount,
      }),
    );
    return {
      groupId,
    };
  }
}
