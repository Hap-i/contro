import { Prop, raw, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { Document } from 'mongoose';
import { User } from '../../user/schema/user.schema';

@Schema({ _id: false, versionKey: false })
class TransactionShare {
  @Prop({
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  })
  userId: User;

  @Prop({ type: Number, required: true })
  amount: number;
}

export type TransactionDocument = Transaction & Document;

@Schema({ timestamps: true })
export class Transaction {
  @Prop({ required: true, type: mongoose.Schema.Types.ObjectId, ref: 'User' })
  lentBy: User;

  @Prop({ required: true })
  totalAmount: number;

  @Prop({ required: true })
  isGroupTransaction: boolean;

  @Prop({
    required: function () {
      return this.isGroupTransaction === true;
    },
  })
  groupId: string;

  @Prop([{ type: TransactionShare }])
  shares: TransactionShare[];
}

export const TransactionSchema = SchemaFactory.createForClass(Transaction);
