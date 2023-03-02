import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { EntityRepository } from '../database/entity.repository';
import { Account, AccountDocument } from './schema/account.schema';

@Injectable()
export class AccountRepository extends EntityRepository<AccountDocument> {
  constructor(
    @InjectModel(Account.name) private accountModel: Model<AccountDocument>,
  ) {
    super(accountModel);
  }
}
