import { IsEmail, IsNotEmpty, IsString, isString, MinLength } from 'class-validator';

export class CreateUserDto {
  @IsString()
  username?: string;

  @IsString()
  @IsEmail()
  email?: string;

  @IsString()
  @MinLength(6)
  password?: string;
}