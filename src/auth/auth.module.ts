import { CacheModule, Module } from '@nestjs/common';
import { AuthController } from './auth.contoller';
import { AuthService } from './auth.service';
import { HttpModule } from '@nestjs/axios';
import { JwtModule } from '@nestjs/jwt';

@Module({
  imports: [
    HttpModule,
    JwtModule.register({}),
    CacheModule.register({ ttl: 120 }),
  ],
  controllers: [AuthController],
  providers: [AuthService],
})
export class AuthModule {}
