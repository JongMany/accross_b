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
import { ColumnsService } from '../../../application/service/columns.service';
import { UpdateColumnNameDto } from '../../../dto/update-column-name.dto';

@Controller('columns')
export class ColumnsController {
  constructor(private readonly columnsService: ColumnsService) {}

  @Get('/')
  @HttpCode(HttpStatus.OK)
  async list(): Promise<ListColumnResponse> {
    return this.columnsService.list();
  }

  @Put('/:columnId')
  @HttpCode(HttpStatus.OK)
  async updateName(
    @Param('columnId') columnId: string,
    @Body() { name }: { name: string },
  ): Promise<UpdateColumnNameResponse> {
    return this.columnsService.updateColumnName(
      new UpdateColumnNameDto({ name, id: columnId }),
    );
  }
}
