import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User } from 'src/core/schema/users.schema';
import * as bcrypt from 'bcrypt';

@Injectable()
export class SignUpService {

    constructor(@InjectModel(User.name) private userModel:Model<User>) {}

    user=[
        {
            id:1,
            name:'ahmed ali mohamed',
            email:"aa@gmail.com",
            password:"123456"
        },
        {
            id:2,
            name:'Mahmoud',
            "email":"ahmed@gmail.com",
            "password":"123456"
        }
    ]

    
    async signUp(body){
    
            let user=await this.userModel.findOne({email:body.email})
            if(user) throw new HttpException("Email Already Exits",HttpStatus.CONFLICT);
            body.password=await  bcrypt.hash(body.password,8);
            let addUser=await this.userModel.insertMany(body)    
            return{message:"User Added Successfuly",addUser}
    }


}
