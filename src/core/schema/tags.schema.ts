
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { timeStamp } from 'console';
import mongoose, { HydratedDocument } from 'mongoose';
import { User } from './users.schema';

// export type usersDocument = HydratedDocument<User>;

@Schema({ timestamps: true , versionKey:false})
export class Tag {
  @Prop(String)
  title: string;

  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'User' })
  createdBy:User;


}

export const tagSchema = SchemaFactory.createForClass(Tag);