import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { ColumnEntity } from '../../entity/column.entity';
import { GetColumnListUseCase } from '../port/in/usecase/get-column-list.usecase';
import { Injectable } from '@nestjs/common';

const statusOrder = ['INIT', 'PROGRESS', 'DONE', 'PENDING'];

@Injectable()
export class GetColumnListService implements GetColumnListUseCase {
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
