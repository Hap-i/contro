import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { Document } from 'mongoose';
import { Account } from '../../accounts/schema/account.schema';
import { User } from '../../user/schema/user.schema';

export type AccountBucketDocumnet = AccountBucket & Document;

@Schema({ timestamps: true })
export class AccountBucket {
  @Prop([{ type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true }])
  users: User[];

  @Prop({
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Account',
    required: true,
  })
  latestBucketId: Account;

  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true })
  positiveLender: User;

  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true })
  negetiveLender: User;

  @Prop({ required: true, default: 0 })
  outSatandingAmount: number;
}

export const AccountBucketSchema = SchemaFactory.createForClass(AccountBucket);
