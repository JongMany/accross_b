import { Injectable } from '@nestjs/common';
import { DeleteGroupResponse } from 'shared-types';

@Injectable()
export abstract class DeleteGroupUseCase {
  deleteGroup: (groupId: string) => Promise<DeleteGroupResponse>;
}
