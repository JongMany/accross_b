import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { GroupEntity } from '../entities/group.entity';
import { GroupsController } from '../adapters/in/controllers/groups.controller';
import { CreateGroupService } from '../application/service/create-group.service';
import { CreateGroupUseCase } from '../application/port/in/create-group.usecase';
import { GetGroupListUseCase } from '../application/port/in/get-group-list.usecase';
import { GetGroupListService } from '../application/service/get-group-list.service';
import { DeleteGroupUseCase } from '../application/port/in/delete-group.usecase';
import { DeleteGroupService } from '../application/service/delete-group.service';
import { UpdateGroupStatusService } from '../application/service/update-group-status.service';
import { UpdateGroupStatusUseCase } from '../application/port/in/update-group-status.usecase';

@Module({
  imports: [TypeOrmModule.forFeature([GroupEntity])],
  controllers: [GroupsController],
  providers: [
    {
      provide: CreateGroupUseCase,
      useClass: CreateGroupService,
    },
    {
      provide: GetGroupListUseCase,
      useClass: GetGroupListService,
    },
    {
      provide: DeleteGroupUseCase,
      useClass: DeleteGroupService,
    },
    {
      provide: UpdateGroupStatusUseCase,
      useClass: UpdateGroupStatusService,
    },
  ],
})
export class GroupsModule {}
