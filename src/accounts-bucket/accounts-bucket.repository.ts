import { Injectable } from '@nestjs/common/decorators';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { EntityRepository } from '../database/entity.repository';
import {
  AccountBucket,
  AccountBucketDocumnet,
} from './schema/accounts-bucket.schema';

@Injectable()
export class AccountBucketRepository extends EntityRepository<AccountBucketDocumnet> {
  constructor(
    @InjectModel(AccountBucket.name)
    private accountBucketModel: Model<AccountBucketDocumnet>,
  ) {
    super(accountBucketModel);
  }
}
