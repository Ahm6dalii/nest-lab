import { buildMessage, IsEmail, IsNotEmpty, IsNumber, IsString, Matches, MaxLength, MinLength } from "class-validator"

export class authDTO{
    id?:Number|string
    @IsString()
    @MinLength(3)
    @MaxLength(10)
    name:String
    @IsEmail()
    @IsNotEmpty({ message: 'email should not be empty.' })
    email:String
    @Matches(/^[0-9]{3,10}$/, {
        message: 'Password must be a number and contain between 3 to 10 digits.',
    })
    @IsNotEmpty({ message: 'Password should not be empty.' })
    password:String
}