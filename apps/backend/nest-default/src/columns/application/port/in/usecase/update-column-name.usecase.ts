import { UpdateColumnNameResponse } from 'shared-types';
import { UpdateColumnNameDto } from '../../../../dto/update-column-name.dto';
import { Injectable } from '@nestjs/common';

@Injectable()
export abstract class UpdateColumnNameUseCase {
  updateColumnName: (
    UpdateColumnDto: UpdateColumnNameDto,
  ) => Promise<UpdateColumnNameResponse>;
}
