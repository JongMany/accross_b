import { Module } from '@nestjs/common';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from 'src/app.controller';
import { GroupsModule } from 'src/groups/modules/groups.module';

@Module({
  imports: [
    GroupsModule,
    TypeOrmModule.forRoot({
      type: 'sqlite',
      database: 'axb.db',
      autoLoadEntities: true,
      synchronize: true,
      logging: true,
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
