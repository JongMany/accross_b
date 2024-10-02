import { Injectable } from '@nestjs/common';
import { ListColumnResponse } from 'shared-types';

@Injectable()
export abstract class GetColumnListUseCase {
  list: () => Promise<ListColumnResponse>;
}
