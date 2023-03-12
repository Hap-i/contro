import { ApiPropertyOptional } from '@nestjs/swagger';
import { IsInt, IsNotEmpty, IsOptional, IsString } from 'class-validator';
import { Account } from '../../accounts/schema/account.schema';
import { User } from '../../user/schema/user.schema';

export class CreateAccountsBucketDto {
  @IsNotEmpty()
  users: User[];

  @IsOptional()
  @ApiPropertyOptional()
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
