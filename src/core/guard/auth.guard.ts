import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';
import { Observable } from 'rxjs';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(private _jwtService:JwtService){

  }
  canActivate(
    context: ExecutionContext,
  ): boolean | Promise<boolean> | Observable<boolean> {
    const req =context.switchToHttp().getRequest();
    let{token}=req.headers;
    let decode=this._jwtService.verify(token,{secret:"ahmed"})
    if(decode){
      req['userId']=decode.id;
      return true
    }else{
      return false;
    }

  }
}
