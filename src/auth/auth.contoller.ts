import { Controller, Post, Body } from '@nestjs/common';
import { AuthService } from './auth.service';

import { UserDto } from './dto';
@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('login')
  login(@Body() dto: UserDto) {
    return this.authService.login(dto);
  }
}
