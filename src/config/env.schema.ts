import * as Joi from 'joi';

export const envSchema = Joi.object({
  API_KEY: Joi.string(),
});
