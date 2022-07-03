import { Injectable } from '@nestjs/common';

@Injectable()
export class AuthService {
  private apiKeys: string[] = ['12345'];

  validateApiKey(apiKeyToValidate: string) {
    return this.apiKeys.find((apiKey) => apiKey === apiKeyToValidate);
  }
}
