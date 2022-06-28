import {
  CACHE_MANAGER,
  ForbiddenException,
  Inject,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

import { AuthUserDto } from './dto';
import * as argon from 'argon2';
import { JwtService } from '@nestjs/jwt';
import { ConfigService } from '@nestjs/config';
import { Cache } from 'cache-manager';

@Injectable()
export class AuthService {
  constructor(
    private prisma: PrismaService,
    private jwt: JwtService,
    private config: ConfigService,
    @Inject(CACHE_MANAGER) private cacheManager: Cache,
  ) {}
  // Public methods visible for the controller
  async authenticate(dto: AuthUserDto) {
    try {
      const cache =
        (await this.cacheManager.get('loginCache')) === undefined
          ? 0
          : await this.cacheManager.get('loginCache');
      if (cache >= 3) {
        throw new ForbiddenException(
          'Number of login attempts was exceeded, wait for 2 MINUTES',
        );
      }
      const user = await this.prisma.user.findUnique({
        where: {
          email: dto.email,
        },
      });
      if (!user) {
        this.verifyCacheLogin();
        throw new UnauthorizedException('Invalid credentials!');
      }

      const passwordMatches = await argon.verify(user.password, dto.password);

      if (!passwordMatches) {
        this.verifyCacheLogin();
        throw new UnauthorizedException('Invalid credentials!');
      }

      return this.signToken(user.id, user.email);
    } catch (error) {
      throw error;
    }
  }

  // Private methods visible only in the service
  private async signToken(
    userId: number,
    email: string,
  ): Promise<{ access_token: string }> {
    const payload = {
      sub: userId,
      email,
    };
    const secret = this.config.get('JWT_SECRET');

    const token = await this.jwt.signAsync(payload, {
      expiresIn: '15m',
      secret: secret,
    });

    return {
      access_token: token,
    };
  }

  private async verifyCacheLogin() {
    const cacheExists = await this.cacheManager.get('loginCache');
    if (!cacheExists) {
      await this.cacheManager.set('loginCache', 0);
    }
    let cache: number = await this.cacheManager.get('loginCache');
    cache = cache + 1;
    await this.cacheManager.set('loginCache', cache);
    cache = await this.cacheManager.get('loginCache');
  }
}
