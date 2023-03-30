import { Module } from '@nestjs/common';
import { TransactionsService } from './transactions.service';
import { TransactionsController } from './transactions.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Transaction, TransactionSchema } from './schema/transaction.schema';
import { TransactionRepository } from './transactions.repository';
import { AccountsBucketModule } from '../accounts-bucket/accounts-bucket.module';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: Transaction.name, schema: TransactionSchema },
    ]),
    AccountsBucketModule,
  ],
  controllers: [TransactionsController],
  providers: [TransactionsService, TransactionRepository],
})
export class TransactionsModule {}
