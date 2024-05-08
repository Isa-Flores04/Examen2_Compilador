import { Module } from '@nestjs/common';
import { MonorepoAppController } from './mailapp.controller';
import { MailappService } from './mailapp.service';


@Module({
  imports: [],
  controllers: [MonorepoAppController],
  providers: [MailappService],
})
export class MailappModule {}
