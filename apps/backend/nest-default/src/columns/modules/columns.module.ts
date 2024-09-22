import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ColumnEntity } from '../entity/column.entity';
import { ColumnsController } from '../adapters/in/controller/columns.controller';
import { UpdateColumnNameUseCase } from '../application/port/in/usecase/update-column-name.usecase';
import { UpdateColumnNameService } from '../application/service/update-column-name.service';
import { GetColumnListUseCase } from '../application/port/in/usecase/get-column-list.usecase';
import { GetColumnListService } from '../application/service/get-column-list.service';

@Module({
  imports: [TypeOrmModule.forFeature([ColumnEntity])],
  controllers: [ColumnsController],
  providers: [
    {
      provide: UpdateColumnNameUseCase,
      useClass: UpdateColumnNameService,
    },
    {
      provide: GetColumnListUseCase,
      useClass: GetColumnListService,
    },
  ],
})
export class ColumnsModule {}
