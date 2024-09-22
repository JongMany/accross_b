import { Repository } from 'typeorm';
import { UpdateColumnNameDto } from '../../dto/update-column-name.dto';
import { UpdateColumnNameUseCase } from '../port/in/usecase/update-column-name.usecase';
import { InjectRepository } from '@nestjs/typeorm';
import { ColumnEntity } from '../../entity/column.entity';

export class UpdateColumnNameService implements UpdateColumnNameUseCase {
  constructor(
    @InjectRepository(ColumnEntity)
    private readonly repository: Repository<ColumnEntity>,
  ) {}
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
