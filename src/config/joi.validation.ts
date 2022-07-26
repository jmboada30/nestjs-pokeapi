import * as Joi from 'joi';

//* Este es el schema que se usa para validar las variables de entorno
export const JoiValidationSchema = Joi.object({
  MONGODB: Joi.string().required(),
  PORT: Joi.number().default(3000),
  DEFAULT_LIMIT: Joi.number().default(5),
});
