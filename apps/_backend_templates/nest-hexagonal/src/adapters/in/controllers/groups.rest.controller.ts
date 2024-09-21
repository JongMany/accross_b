import {
  BadRequestException,
  Body,
  Controller,
  Get,
  HttpCode,
  HttpStatus,
  Post,
} from '@nestjs/common';
import { CommandBus, QueryBus } from '@nestjs/cqrs';
import {
  ListGroupsQuery,
} from '../../../modules/group/queries/list-groups.query';
import { ListGroupResponse } from 'shared-types';
import { CreateGroupCommand, OpenTicketCommandResult } from '../../../modules/group/commands/create-group-command';
import { CreateGroupResponse } from 'shared-types/src/groups/create-group-response';

@Controller('groups')
export class GroupsRestController {
  constructor(
    private readonly commandBus: CommandBus,
    private readonly queryBus: QueryBus,
  ) {}

  @Get()
  @HttpCode(HttpStatus.OK)
  async list(): Promise<ListGroupResponse> {
    return this.queryBus.execute(new ListGroupsQuery())
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
    const { groupId } = await this.commandBus.execute<CreateGroupCommand, OpenTicketCommandResult>(new CreateGroupCommand({ name: groupName, orderCount }));
    return {
      groupId,
    };
  }
}
