import { Injectable } from '@nestjs/common';
import { MailerService } from '@nestjs-modules/mailer';

@Injectable()
export class MailService {
  constructor(private readonly mailerService: MailerService) {}

  public example(): void {
    const result = this.mailerService
      .sendMail({
        to: 'luigiperez2002@gmail.com', // list of receivers
        from: 'pruebas.informatica@upa.edu.mx', // sender address
        subject: 'Testing Nest MailerModule ✔', // Subject line
        text: 'welcome', // plaintext body
        html: '<b>welcome</b>', // HTML body content
      })
      .then()
      .catch(() => {});
  }
}
