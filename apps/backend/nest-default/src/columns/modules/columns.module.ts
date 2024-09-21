import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ColumnEntity } from '../entity/column.entity';
import { ColumnsController } from '../adapters/in/controller/columns.controller';
import { ColumnsService } from '../application/service/columns.service';

@Module({
  imports: [TypeOrmModule.forFeature([ColumnEntity])],
  controllers: [ColumnsController],
  providers: [ColumnsService],
})
export class ColumnsModule {}
