import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsNotEmpty, IsString } from 'class-validator';

export class AuthUserDto {
  @IsEmail()
  @IsNotEmpty()
  @ApiProperty({
    example: 'guilhermag@gmail.com',
    description: 'The email of the user that is trying to validate',
    default: 'userEmail@email.com',
  })
  email: string;

  @IsNotEmpty()
  @IsString()
  @ApiProperty({
    example: 'guilhermePassword#123',
    description: 'The password of the user that is trying to validate',
    default: 'userPassword',
  })
  password: string;
}
