import { UpdateColumnNameResponse } from 'shared-types';
import { UpdateColumnNameDto } from '../../../../dto/update-column-name.dto';

export abstract class UpdateColumnNameUseCase {
  updateColumnName: (
    UpdateColumnDto: UpdateColumnNameDto,
  ) => Promise<UpdateColumnNameResponse>;
}
