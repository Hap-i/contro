import { Injectable } from '@nestjs/common';
import { CreateTransactionDto } from './dto/create-transaction.dto';
// import { UpdateTransactionDto } from './dto/update-transaction.dto';
import { TransactionRepository } from './transactions.repository';

@Injectable()
export class TransactionsService {
  constructor(private readonly transactionRepository: TransactionRepository) {}
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

    return await this.transactionRepository.create(createTransactionDto);
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
