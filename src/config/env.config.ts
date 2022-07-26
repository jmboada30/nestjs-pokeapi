//* Esto lo uso para trabajar las variables de entorno en el proyecto con NestJS
export const EnvConfig = () => ({
  enviroment: process.env.NODE_ENV || 'dev',
  mongodb: process.env.MONGODB,
  port: process.env.PORT,
  defaultLimit: +process.env.DEFAULT_LIMIT,
});
