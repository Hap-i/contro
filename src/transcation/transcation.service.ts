import { Injectable } from '@nestjs/common';
import { CreateTranscationDto } from './dto/create-transcation.dto';
// import { UpdateTranscationDto } from './dto/update-transcation.dto';
import { TransactionRepository } from './transaction.repository';

@Injectable()
export class TranscationService {
  constructor(private readonly transactionRepository: TransactionRepository) {}
  async create(createTranscationDto: CreateTranscationDto) {
    return await this.transactionRepository.create(createTranscationDto);
  }

  // findAll() {
  //   return `This action returns all transcation`;
  // }

  async findOne(id: string) {
    return await this.transactionRepository.findOne({ _id: id });
  }
}
