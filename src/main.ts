import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      forbidNonWhitelisted: true,
      transform: true,
      transformOptions: {
        enableImplicitConversion: true,
      },
    }),
  );

  //* set prefix for all routes
  app.setGlobalPrefix('api/v2');

  await app.listen(process.env.PORT);
  console.log(`Server running on port ${process.env.PORT}`);
}
bootstrap();
