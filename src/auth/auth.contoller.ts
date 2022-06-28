import { Controller, Post, Body, HttpStatus, HttpCode } from '@nestjs/common';
import { AuthService } from './auth.service';

import { AuthUserDto } from './dto';
@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @HttpCode(HttpStatus.OK)
  @Post('user')
  authUser(@Body() dto: AuthUserDto) {
    return this.authService.authenticate(dto);
  }
}
