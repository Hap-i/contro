import { Module } from '@nestjs/common';
import { AccountsBucketService } from './accounts-bucket.service';
import { AccountsBucketController } from './accounts-bucket.controller';
import { MongooseModule } from '@nestjs/mongoose';
import {
  AccountBucket,
  AccountBucketSchema,
} from './schema/accounts-bucket.schema';
import { AccountBucketRepository } from './accounts-bucket.repository';
import { AccountsModule } from '../accounts/accounts.module';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: AccountBucket.name, schema: AccountBucketSchema },
    ]),
    AccountsModule,
  ],
  controllers: [AccountsBucketController],
  providers: [AccountsBucketService, AccountBucketRepository],
  exports: [AccountsBucketService],
})
export class AccountsBucketModule {}
