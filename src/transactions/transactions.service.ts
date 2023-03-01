import { Injectable } from '@nestjs/common';
import { CreateTransactionDto } from './dto/create-transaction.dto';
// import { UpdateTransactionDto } from './dto/update-transaction.dto';
import { TransactionRepository } from './transactions.repository';

@Injectable()
export class TransactionsService {
  constructor(private readonly transactionRepository: TransactionRepository) {}
  create(createTransactionDto: CreateTransactionDto) {
    return this.transactionRepository.create(createTransactionDto);
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
