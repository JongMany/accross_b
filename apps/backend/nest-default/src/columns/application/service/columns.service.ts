import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';

import { Repository } from 'typeorm';
import { ColumnEntity } from '../../entity/column.entity';

const statusOrder = ['INIT', 'PROGRESS', 'DONE', 'PENDING'];

@Injectable()
export class ColumnsService {
  constructor(
    @InjectRepository(ColumnEntity)
    private readonly repository: Repository<ColumnEntity>,
  ) {}
  async list() {
    const columns = await this.repository.find();
    return {
      columns: columns.sort((a, b) => {
        return statusOrder.indexOf(a.status) - statusOrder.indexOf(b.status);
      }),
    };
  }
}