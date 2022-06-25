import { IsEmail, IsNotEmpty, IsString } from 'class-validator';

export class UserDto {
  @IsEmail()
  @IsNotEmpty()
  email: string;

  name?: string;

  @IsNotEmpty()
  @IsString()
  password: string;
}
