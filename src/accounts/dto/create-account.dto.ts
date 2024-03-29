import { IsNotEmpty, IsNumber, IsOptional, IsString } from 'class-validator';

export class CreateAccountDto {
  @IsNotEmpty()
  @IsNumber()
  openingOutstandingAmount: number;

  @IsOptional()
  @IsNumber()
  noTxnInBucket: number;

  @IsString()
  @IsOptional()
  prevBucket: string;

  transactions: Record<string, any>[];

  @IsNotEmpty()
  @IsNumber()
  currentOutstandingAmount: number;
}
