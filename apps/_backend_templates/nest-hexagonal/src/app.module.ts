import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CqrsModule } from '@nestjs/cqrs';
import { configModule } from './app.config';
import { AdapterInModule } from './adapters/in/adapter-in.module';
import { AdapterOutModule } from './adapters/out/adapter-out.module';
import { GroupModule } from './modules/group/group.module';

@Module({
  imports: [
    configModule,
    { module: CqrsModule, global: true },
    AdapterInModule,
    AdapterOutModule,
    GroupModule,
    TypeOrmModule.forRoot({
      type: 'sqlite',
      database: 'axb.db',
      autoLoadEntities: true,
      synchronize: true,
      logging: true,
    }),
  ],
})
export class AppModule {}
