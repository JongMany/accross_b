import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { GroupsController } from 'src/groups/adapters/in/controllers/groups.controller';
import { GroupsService } from 'src/groups/application/service/groups.service';
import { GroupEntity } from 'src/groups/entities/group.entity';

@Module({
  imports: [TypeOrmModule.forFeature([GroupEntity])],
  controllers: [GroupsController],
  providers: [GroupsService],
})
export class GroupsModule {}
