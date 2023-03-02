import { Module } from '@nestjs/common';
import { AccountsBucketService } from './accounts-bucket.service';
import { AccountsBucketController } from './accounts-bucket.controller';
import { MongooseModule } from '@nestjs/mongoose';
import {
  AccountBucket,
  AccountBucketSchema,
} from './schema/accounts-bucket.schema';
import { AccountBucketRepository } from './accounts-bucket.repository';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: AccountBucket.name, schema: AccountBucketSchema },
    ]),
  ],
  controllers: [AccountsBucketController],
  providers: [AccountsBucketService, AccountBucketRepository],
})
export class AccountsBucketModule {}
