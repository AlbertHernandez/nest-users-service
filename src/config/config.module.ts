import { Module } from '@nestjs/common';
import { ConfigModule as NestConfigModule } from '@nestjs/config';
import { configLoader } from './config.loader';
import { envSchema } from './env.schema';

@Module({
  imports: [
    NestConfigModule.forRoot({
      load: [configLoader],
      validationSchema: envSchema,
    }),
  ],
})
export class ConfigModule {}
