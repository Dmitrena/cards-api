import { prop } from '@typegoose/typegoose';
import { TimeStamps } from '@typegoose/typegoose/lib/defaultClasses';
import { Types } from 'mongoose';

export class ReviewModel extends TimeStamps {
  @prop({ required: true })
  name: string;
  @prop({ required: true })
  title: string;
  @prop({ required: true })
  description: string;
  @prop({ required: true })
  rating: number;
  @prop()
  productId: Types.ObjectId;
}
