import {
  IsBoolean,
  IsInt,
  IsNotEmpty,
  IsOptional,
  IsString,
} from 'class-validator';

export class CreateTransactionDto {
  @IsNotEmpty()
  @IsString()
  lentBy: string;

  @IsNotEmpty()
  @IsInt()
  totalAmount: number;

  @IsNotEmpty()
  @IsBoolean()
  isGroupTransaction: boolean;

  @IsString()
  @IsOptional()
  groupId: string;

  shares: Record<string, any>[];
}
