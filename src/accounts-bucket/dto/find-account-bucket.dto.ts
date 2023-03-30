import { IsNotEmpty } from 'class-validator';
import { User } from '../../user/schema/user.schema';

export class FindAccountsBucketDto {
  @IsNotEmpty()
  users: User[];
}
