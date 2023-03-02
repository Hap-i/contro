import { IsInt, IsNotEmpty, IsString } from 'class-validator';
import { Account } from '../../accounts/schema/account.schema';
import { User } from '../../user/schema/user.schema';

export class CreateAccountsBucketDto {
  @IsNotEmpty()
  users: User[];

  @IsNotEmpty()
  latestBucketId: Account;

  @IsNotEmpty()
  @IsString()
  positiveLender: User;

  @IsNotEmpty()
  @IsString()
  negetiveLender: User;

  @IsNotEmpty()
  @IsInt()
  outSatandingAmount: number;
}
