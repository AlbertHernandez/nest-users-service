import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { PassportModule } from '@nestjs/passport';
import { ApiKeyStrategy } from './api-key.strategy';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [PassportModule, ConfigModule],
  providers: [AuthService, ApiKeyStrategy],
})
export class AuthModule {}
