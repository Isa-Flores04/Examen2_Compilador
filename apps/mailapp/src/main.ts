import { NestFactory } from '@nestjs/core';
import { MailappModule } from './mailapp.module';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';
import { NestExpressApplication } from '@nestjs/platform-express';

async function bootstrap() {
  // const app = await NestFactory.create<NestExpressApplication>(
  //   MailappModule,
  // );
 //await app.listen(3000);
 const app = await NestFactory.createMicroservice<MicroserviceOptions>(
  MailappModule,
  {
  transport: Transport.TCP
  },
  )
  await app.listen()
  }
bootstrap();
