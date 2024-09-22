import { ListColumnResponse } from 'shared-types';

export abstract class GetColumnListUseCase {
  list: () => Promise<ListColumnResponse>;
}
