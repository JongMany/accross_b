import { Controller, Get, HttpCode, HttpStatus } from '@nestjs/common';
import { ListColumnResponse } from 'shared-types';
import { ColumnsService } from '../../../application/service/columns.service';

@Controller('columns')
export class ColumnsController {
  constructor(private readonly columnsService: ColumnsService) {}

  @Get('/')
  @HttpCode(HttpStatus.OK)
  async list(): Promise<ListColumnResponse> {
    return this.columnsService.list();
  }
}
