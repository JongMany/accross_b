import { Module } from '@nestjs/common';
import { GroupsModule } from './groups/modules/groups.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ColumnsModule } from './columns/modules/columns.module';
import { ColumnEntity } from './columns/entity/column.entity';
import { AppController } from './app.controller';
import { AppService } from './app.service';

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
    ColumnsModule,
    TypeOrmModule.forFeature([ColumnEntity]), // 모듈에서 엔티티 등록
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
