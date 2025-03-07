import { Injectable } from '@nestjs/common';
import { MailService } from './mail/mail.service';

@Injectable()
export class AppService {
  constructor(private readonly mailService: MailService) {}
  getHello(): string {
    this.mailService.sendConfirmationEmail("test@testemail.com", { name: "Aspirante"});
    return 'Hello World!';
  }
} //Comment
