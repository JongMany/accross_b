import { Module } from '@nestjs/common';
import { AdapterOutModule } from '../../adapters/out/adapter-out.module';
import { CreateGroupCommandHandler } from './commands/create-group-command';
import { ListGroupsQueryHandler } from './queries/list-groups.query';

@Module({
  imports: [AdapterOutModule],
  providers: [
    CreateGroupCommandHandler,
    ListGroupsQueryHandler,
  ],
})
export class GroupModule {}
