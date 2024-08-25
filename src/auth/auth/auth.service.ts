import { Injectable, Body } from '@nestjs/common';

@Injectable()
export class AuthService {

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


    signUp(body){
        const founded=this.user.find(ele=>ele.email==body.email)
        if(founded) return{message:'email already exist'} 
        body.id=this.user[this.user.length-1].id+1
            this.user.push(body)
            return{message:"user Added Successfuly"}
    }
    signIn(body){
        // console.log(body);  
        const founded=this.user.find(ele=>ele.email==body.email)
            if(!founded||founded?.password!=body?.password) return {message:'invalid email or password'}
            return {message:"login successfuly",user:body}

    }
}
