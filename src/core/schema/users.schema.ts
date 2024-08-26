
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { timeStamp } from 'console';
import { HydratedDocument } from 'mongoose';

// export type usersDocument = HydratedDocument<User>;

@Schema({ timestamps: true , versionKey:false})
export class User {
  @Prop(String)
  name: string;

  @Prop({ required: true })
  email: string;

  @Prop()
  password:string;
}

export const userSchema = SchemaFactory.createForClass(User);