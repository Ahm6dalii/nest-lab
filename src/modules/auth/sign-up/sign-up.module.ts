import { Module } from '@nestjs/common';
import { SignUpController } from './sign-up.controller';
import { SignUpService } from './sign-up.service';
import { MongooseModule } from '@nestjs/mongoose';
import { User, userSchema } from 'src/core/schema/users.schema';

@Module({
  imports: [MongooseModule.forFeature([{ name: User.name, schema: userSchema }])],
  controllers: [SignUpController],
  providers: [SignUpService]
})
export class SignUpModule {}
