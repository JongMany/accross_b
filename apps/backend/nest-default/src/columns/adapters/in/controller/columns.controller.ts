import {
  Body,
  Controller,
  Get,
  HttpCode,
  HttpStatus,
  Param,
  Put,
} from '@nestjs/common';
import { ListColumnResponse, UpdateColumnNameResponse } from 'shared-types';
import { UpdateColumnNameDto } from '../../../dto/update-column-name.dto';
import { GetColumnListUseCase } from '../../../application/port/in/usecase/get-column-list.usecase';
import { UpdateColumnNameUseCase } from '../../../application/port/in/usecase/update-column-name.usecase';

@Controller('columns')
export class ColumnsController {
  constructor(
    private readonly getColumnListUseCase: GetColumnListUseCase,
    private readonly updateColumnListUseCase: UpdateColumnNameUseCase,
  ) {}

  @Get('/')
  @HttpCode(HttpStatus.OK)
  async list(): Promise<ListColumnResponse> {
    return this.getColumnListUseCase.list();
  }

  @Put('/:columnId')
  @HttpCode(HttpStatus.OK)
  async updateName(
    @Param('columnId') columnId: string,
    @Body() { name }: { name: string },
  ): Promise<UpdateColumnNameResponse> {
    return this.updateColumnListUseCase.updateColumnName(
      new UpdateColumnNameDto({ name, id: columnId }),
    );
  }
}
