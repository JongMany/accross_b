import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { GroupEntity } from '../entities/group.entity';
import { GroupsController } from '../adapters/in/controllers/groups.controller';
import { GroupsService } from '../application/service/groups.service';

@Module({
  imports: [TypeOrmModule.forFeature([GroupEntity])],
  controllers: [GroupsController],
  providers: [GroupsService],
})
export class GroupsModule {}
