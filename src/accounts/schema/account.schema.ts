import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { Document } from 'mongoose';
import { User } from '../../user/schema/user.schema';

@Schema({ _id: false, versionKey: false })
class Transaction {
  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true })
  lentBy: User;

  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true })
  borrowedBy: User;

  @Prop({ required: true })
  amount: number;
}

export type AccountDocument = Account & Document;

@Schema({ timestamps: true })
export class Account {
  @Prop({ required: true })
  openingOutstandingAmount: number;

  @Prop()
  noTxnInBucket: number;

  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'Account' })
  prevBucket: Account;

  @Prop([{ type: Transaction }])
  transactions: Transaction[];

  @Prop({ required: true })
  currentOutstandingAmount: number;
}

export const AccountSchema = SchemaFactory.createForClass(Account);
