import { Body, Controller, Post } from '@nestjs/common';
import { SignInService } from './sign-in.service';
import { signInDTO } from '../dto/signIn.dto';

@Controller('sign-in')
export class SignInController {
  constructor(private _signInService: SignInService) {}
  @Post()
  signIn(@Body() body:signInDTO) {
    return this._signInService.signIn(body);
  }
}
