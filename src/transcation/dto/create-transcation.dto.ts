import { IsInt, IsNotEmpty, IsString, Min } from 'class-validator';
import { User } from '../../user/schema/user.schema';

export class CreateTranscationDto {
  @IsNotEmpty()
  @IsInt()
  @Min(1)
  amount: number;

  @IsNotEmpty()
  @IsString()
  sender: User;

  @IsNotEmpty()
  @IsString()
  receiver: User;
}
