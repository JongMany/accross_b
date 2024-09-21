import { CommandHandler, ICommand, ICommandHandler } from '@nestjs/cqrs';
import { BadRequestException, Inject } from '@nestjs/common';
import { GroupCommandRepository } from './group-command.repository';
import Group from '../../../domain/group/group';

export class CreateGroupCommand implements ICommand {
  constructor(
    readonly data: {
      name: string,
      orderCount: number,
    },
  ) {
    if (!data.name || data.orderCount === undefined) {
      throw new BadRequestException('name, orderCount is required');
    }
  }
}

export type OpenTicketCommandResult = {
  groupId: string,
};

@CommandHandler(CreateGroupCommand)
export class CreateGroupCommandHandler
implements ICommandHandler<CreateGroupCommand, OpenTicketCommandResult>
{
  constructor(
        @Inject('GroupCommandRepository')
        private readonly repository: GroupCommandRepository,
  ) {}

  async execute(command: CreateGroupCommand) {
    const group = Group.create({ name: command.data.name, orderCount: command.data.orderCount });
    return this.repository.save(group);
  }
}