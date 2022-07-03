import { ConfigIdentifier } from './config-identifier.constant';

export interface ServerConfig {
  apiKey: string;
}

const serverConfigLoader = (): ServerConfig => ({
  apiKey: process.env.API_KEY,
});

export const configLoader = () => ({
  [ConfigIdentifier.Server]: serverConfigLoader(),
});
