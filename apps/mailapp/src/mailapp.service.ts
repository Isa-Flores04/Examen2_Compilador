import { Injectable } from '@nestjs/common';

@Injectable()
export class MailappService {
  getHello(): string {
    return 'Hello Monorepo_app!';
  }
}