import { Injectable } from '@nestjs/common';
import { UpdateGroupResponse } from 'shared-types';

@Injectable()
export abstract class UpdateGroupStatusUseCase {
  updateToNextStatus: (groupId: string) => Promise<UpdateGroupResponse>;
}
