import { Logger } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { AppModule } from './app.module';
import environment from './environment';

async function bootstrap() {
  const port = environment()['port'];
  const logger = new Logger('bootstrap()');
  const app = await NestFactory.create(AppModule);

  const options = new DocumentBuilder()
    .setTitle('Application Service')
    .setVersion('1.0')
    .build();
  const document = SwaggerModule.createDocument(app, options);
  SwaggerModule.setup('api', app, document);

  await app.listen(port);
  app.getUrl().then(url => {
    logger.log(`Listening on: ${url}`);
  });
}
bootstrap();
