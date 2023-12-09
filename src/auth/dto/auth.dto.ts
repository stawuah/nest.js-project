import { IsEmail, IsString, IsNotEmpty } from 'class-validator';

export class AuthDto {

    @IsEmail()
    @IsNotEmpty() // Corrected function name
    email: string;

    @IsString()
    @IsNotEmpty() // Corrected function name
    password: string;
}
