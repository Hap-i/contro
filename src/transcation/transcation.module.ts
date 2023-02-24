import { Module } from '@nestjs/common';
import { TranscationService } from './transcation.service';
import { TranscationController } from './transcation.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Transaction, TransactionSchema } from './schema/transaction.schema';
import { TransactionRepository } from './transaction.repository';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: Transaction.name, schema: TransactionSchema },
    ]),
  ],
  controllers: [TranscationController],
  providers: [TranscationService, TransactionRepository],
})
export class TranscationModule {}
