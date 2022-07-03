import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { ConfigIdentifier } from '../config/config-identifier.constant';
import { ServerConfig } from '../config/config.loader';

@Injectable()
export class AuthService {
  private apiKeys: string[];

  constructor(private readonly configService: ConfigService) {
    const serverApiKey = configService.get<ServerConfig>(
      ConfigIdentifier.Server,
    );
    this.apiKeys = [serverApiKey.apiKey];
  }

  validateApiKey(apiKeyToValidate: string) {
    return this.apiKeys.find((apiKey) => apiKey === apiKeyToValidate);
  }
}
