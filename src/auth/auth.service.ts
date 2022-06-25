import { ForbiddenException, Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

import { UserDto } from './dto';
import * as argon from 'argon2';

@Injectable()
export class AuthService {
  constructor(private prisma: PrismaService) {}
  async login(dto: UserDto) {
    const user = await this.prisma.user.findUnique({
      where: {
        email: dto.email,
      },
    });
    if (!user) throw new ForbiddenException('User does not exist.');

    const passwordMatches = await argon.verify(user.password, dto.password);

    if (!passwordMatches) throw new ForbiddenException('Wrong password');

    delete user.password;
    return user;
  }
}
