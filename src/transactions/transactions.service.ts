import { Injectable } from '@nestjs/common';
import { AccountsBucketService } from '../accounts-bucket/accounts-bucket.service';
import { CreateTransactionDto } from './dto/create-transaction.dto';
// import { UpdateTransactionDto } from './dto/update-transaction.dto';
import { TransactionRepository } from './transactions.repository';

@Injectable()
export class TransactionsService {
  constructor(
    private readonly transactionRepository: TransactionRepository,
    private readonly accountsBucketService: AccountsBucketService,
  ) {}
  async create(createTransactionDto: CreateTransactionDto) {
    /* One to One Transaction
    TODO: step-1: start trnasaction
    TODO: step-2: update transaction table
    TODO: step-3: find latest account bucket id from account-bucket app
                  if not available create One account with the transactions 
                      and updated account-bucket table
                  if account available then, update the transactions in the account table
    TODO: step-4: commit the transaction
    */
    try {
      //STEP-2: Check if the share amounts sums to TotalAmount
      let totalCalculatedAmount = 0;
      createTransactionDto.shares.map((record) => {
        totalCalculatedAmount += record.amount;
      });
      if (totalCalculatedAmount !== createTransactionDto.totalAmount) {
        return 'calculate amount is not equal to total amount';
      }
      // STEP-3: get all the latest bucketId for the people with lentby
      /*
        Prerequsite:
        - Find using User service of account-bucket app
        - update service of accounts app
       */
      const transactionObj = await this.transactionRepository.create(
        createTransactionDto,
      );
    } catch (error) {}

    return null;
  }

  findAll() {
    return this.transactionRepository.find({});
  }

  findOne(id: number) {
    return `This action returns a #${id} transaction`;
  }

  // update(id: number, updateTransactionDto: UpdateTransactionDto) {
  //   return `This action updates a #${id} transaction`;
  // }

  // remove(id: number) {
  //   return `This action removes a #${id} transaction`;
  // }
}
