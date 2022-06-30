import { Controller, Post, Body, HttpStatus, HttpCode } from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { AuthService } from './auth.service';

import { AuthUserDto } from './dto';
import { IndexAuthSwagger } from './swagger/index-auth.swagger';

@Controller('auth')
@ApiTags('Authentication')
export class AuthController {
  constructor(private authService: AuthService) {}

  @HttpCode(HttpStatus.OK)
  @Post('user')
  @ApiOperation({ summary: 'Authenticates a user' })
  @ApiResponse({
    status: 200,
    description: 'The user was authenticated successfully',
    type: IndexAuthSwagger,
  })
  @ApiResponse({
    status: 401,
    description: 'The user credentials are invalids',
  })
  @ApiResponse({
    status: 403,
    description:
      'Number of login attempts was exceeded, the app was blocked, wait for 2 MINUTES',
  })
  authUser(@Body() dto: AuthUserDto) {
    return this.authService.authenticate(dto);
  }
}
