import { NestExpressApplication } from '@nestjs/platform-express';
import { NestFactory } from '@nestjs/core';
import './app.config';
import { AppModule } from './app.module';
import { json } from 'body-parser';

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);
  app.set('trust proxy', true);
  app.set('etag', false);
  app.use(json({ limit: '50mb' }));
  app.enableCors();

  const port = process.env.PORT || 8000;

  await app.listen(port, '0.0.0.0', () => {
    console.log('Started: ', port);
  });
}
bootstrap();

process.on('uncaughtException', (error) => {
  console.error('uncaughtException', error);
});
