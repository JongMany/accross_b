import { CreateGroupResponse } from 'shared-types/src/groups/create-group-response';
import { CreateGroupDto } from '../../../dto/create-group.dto';
import { Injectable } from '@nestjs/common';

@Injectable()
export abstract class CreateGroupUseCase {
  createGroup: (createGroupDto: CreateGroupDto) => Promise<CreateGroupResponse>;
}
