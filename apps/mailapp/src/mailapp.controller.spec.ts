import { Test, TestingModule } from '@nestjs/testing';
import { MailappController } from './mailapp.controller';
import { MailappService } from './mailapp.service';

describe('MailapppController', () => {
  let MailappController: MailappController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [MailappController],
      providers: [MailappService],
    }).compile();

    MailappController = app.get<MailappController>(MailappController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(MailappController.getHello()).toBe('Hello World!');
    });
  });
});