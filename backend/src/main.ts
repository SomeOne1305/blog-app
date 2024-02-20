import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as dotenv from 'dotenv'

async function bootstrap() {
  dotenv.config()
  const app = await NestFactory.create(AppModule);
  app.enableCors({
    origin:'http://127.0.0.1:5500'
  })
  
  app.setGlobalPrefix("/v1/api")
  await app.listen(8000);
}
bootstrap();
