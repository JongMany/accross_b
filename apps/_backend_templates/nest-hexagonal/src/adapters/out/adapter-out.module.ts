import { Module } from '@nestjs/common';
import { GroupCommandRepositoryAdapter } from './persistence/group-command.repository.adapter';
import { GroupQueryRepositoryAdapter } from './persistence/group-query.repository.adapter';
import { SqliteModule } from './persistence/sqlite/sqlite.module'; 

@Module({
  imports: [SqliteModule],
  providers: [
    {
      provide: 'GroupCommandRepository',
      useClass: GroupCommandRepositoryAdapter,
    },
    {
      provide: 'GroupQueryRepository',
      useClass: GroupQueryRepositoryAdapter,
    },
  ],
  exports: [
    'GroupCommandRepository',
    'GroupQueryRepository',
  ],
})
export class AdapterOutModule {}
