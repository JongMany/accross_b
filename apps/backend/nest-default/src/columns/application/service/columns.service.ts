import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';

import { Repository } from 'typeorm';
import { ColumnEntity } from '../../entity/column.entity';
import { UpdateColumnNameDto } from '../../dto/update-column-name.dto';

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

  async updateColumnName(UpdateColumnDto: UpdateColumnNameDto) {
    const { id, name } = UpdateColumnDto;
    const column = await this.repository.findOne({
      where: { id },
    });
    if (!column) {
      return {
        message: 'Column not found',
        statusCode: 404,
        status: 'failure',
      };
    }
    column.name = name;
    await this.repository.save(column);
    return {
      message: 'Column name updated',
      statusCode: 200,
      status: 'success',
    };
  }
}
