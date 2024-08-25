import { Body, Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { authDTO } from 'src/dto/auth.dto';

@Controller('auth')
export class AuthController {
constructor(private _authService:AuthService){

}

    @Post('signIn')
    signIn(@Body() body:authDTO){
       return this._authService.signIn(body)
    }
    @Post('signUp')
    signUp(@Body() body:authDTO){
      return  this._authService.signUp(body)
    }

    
}
