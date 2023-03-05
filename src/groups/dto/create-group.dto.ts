import { IsNotEmpty, IsString } from 'class-validator';
import { User } from '../../user/schema/user.schema';

export class CreateGroupDto {
  @IsNotEmpty()
  @IsString()
  groupName: string;

  @IsNotEmpty()
  createdBy: string;

  @IsNotEmpty()
  members: User[];
}
