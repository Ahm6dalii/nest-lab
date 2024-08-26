import { Body, Controller, Post } from '@nestjs/common';
import { SignUpService } from './sign-up.service';
import { authDTO } from '../dto/auth.dto';

@Controller('sign-up')
export class SignUpController {
    
    constructor(private _signUpService:SignUpService){

    }
    @Post()
    signUp(@Body() body:authDTO){
      return  this._signUpService.signUp(body)
    }

}