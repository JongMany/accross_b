import { Module } from '@nestjs/common';
import { GroupSqliteDao } from './group.sqlite.dao';
import { TypeOrmModule } from '@nestjs/typeorm';
import { GroupEntity } from './group.entity';


@Module({
  imports: [TypeOrmModule.forFeature([GroupEntity])],
  providers: [GroupSqliteDao],
  exports: [GroupSqliteDao],
})
export class SqliteModule {}