import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User } from 'src/core/schema/users.schema';
import * as bcrypt from 'bcrypt';
import { signInDTO } from '../dto/signIn.dto';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class SignInService {

    constructor(@InjectModel(User.name) private userModel:Model<User>,private jwtService: JwtService) {}

    async signIn(body:signInDTO)
    {

            let foundUser=await this.userModel.findOne({email:body.email});            
            if(foundUser && await bcrypt.compare(body.password,foundUser.password))
            {
                let token= await this.jwtService.sign({name:foundUser.name,email:foundUser.email},{secret:"ahmed"})
                return{message:"success",token}
            }else{
                throw new HttpException("invaild email or password",HttpStatus.BAD_REQUEST)
            }
    }

}
