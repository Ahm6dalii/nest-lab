import { IsNotEmpty, IsNumber, IsString, isString, MaxLength, MinLength } from "class-validator"

export class tagsDTO {

    id?: number|string 
    @IsString()
    @MinLength(3)
    @MaxLength(15)
    @IsNotEmpty()
    name:string

    @IsString()
    @IsNotEmpty()
    @MinLength(3)
    @MaxLength(15)
    title:string 
}