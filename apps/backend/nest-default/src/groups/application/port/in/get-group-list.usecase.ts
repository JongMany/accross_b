import { Injectable } from '@nestjs/common';
import { ListGroupResponse } from 'shared-types';

@Injectable()
export abstract class GetGroupListUseCase {
  getGroupList: () => Promise<ListGroupResponse>;
}
