import { IsEmail, IsEmpty, IsNotEmpty, IsString, MaxLength, MinLength } from "class-validator";

export class signInDTO{
    @IsEmail()
    @IsNotEmpty()
    email:string;

    @IsString()
    @MinLength(6)
    @MaxLength(10)
    @IsNotEmpty()
    password:string
}