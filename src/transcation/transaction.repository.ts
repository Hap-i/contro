import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { EntityRepository } from '../database/entity.repository';
import { Transaction, TransactionDocument } from './schema/transaction.schema';

@Injectable()
export class TransactionRepository extends EntityRepository<TransactionDocument> {
  constructor(
    @InjectModel(Transaction.name)
    private transcationDocument: Model<TransactionDocument>,
  ) {
    super(transcationDocument);
  }
}
