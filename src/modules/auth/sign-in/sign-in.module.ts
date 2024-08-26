import { Module } from '@nestjs/common';
import { SignInService } from './sign-in.service';
import { SignInController } from './sign-in.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { User, userSchema } from 'src/core/schema/users.schema';
import { JwtService } from '@nestjs/jwt';


@Module({
  imports: [MongooseModule.forFeature([{ name: User.name, schema: userSchema }])],
  providers: [SignInService,JwtService],
  controllers: [SignInController]
})
export class SignInModule {}
