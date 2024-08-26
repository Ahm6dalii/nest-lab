
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { timeStamp } from 'console';
import mongoose, { HydratedDocument } from 'mongoose';
import { User } from './users.schema';
import { Tag } from './tags.schema';

// export type usersDocument = HydratedDocument<User>;

@Schema({ timestamps: true , versionKey:false})
export class Article {
  @Prop(String)
  title: string;
  
  @Prop(String)
  content: string;

  @Prop(String)
  coverImg: string;

  @Prop([String])
  images: string[];

  @Prop(Number)
  likes: number;

  @Prop({ type: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Tag' }] })
  tags: Tag[];

  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'User' })
  author:User;


}

export const articleSchema = SchemaFactory.createForClass(Article);