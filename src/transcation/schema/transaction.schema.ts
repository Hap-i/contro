import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { Document } from 'mongoose';
import { User } from '../../user/schema/user.schema';

export type TransactionDocument = Transaction & Document;

@Schema({ timestamps: true })
export class Transaction {
  @Prop({ required: true, min: 1 })
  amount: number;

  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true })
  sender: User;

  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true })
  receiver: User;
}

export const TransactionSchema = SchemaFactory.createForClass(Transaction);
