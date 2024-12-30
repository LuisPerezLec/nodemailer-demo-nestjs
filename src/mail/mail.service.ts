import { Injectable } from '@nestjs/common';
import { MailerService } from '@nestjs-modules/mailer';
import { join } from 'path';

@Injectable()
export class MailService {
  constructor(private readonly mailerService: MailerService) {}

  public example(): void {
    const result = this.mailerService
      .sendMail({
        to: 'luigiperez2002@gmail.com', // list of receivers
        from: 'pruebas.informatica@upa.edu.mx', // sender address
        subject: 'Testing Nest MailerModule ✔', // Subject line
        template: 'index',
        context: { name: 'Aspirante' },
        attachments: [
          {
            filename: 'image-1.png',
            path: join(__dirname, '..', '..', 'src', 'templates', 'images', 'image-1.png'),
            cid: 'unique1@nodemailer.com',
          }, // image-2.png
          {
            filename: 'image-2.png',
            path: join(__dirname, '..', '..', 'src', 'templates', 'images', 'image-2.jpeg'),
            cid: 'unique2@nodemailer.com',
          },
          {
            filename: 'image-3.png',
            path: join(__dirname, '..', '..', 'src', 'templates', 'images', 'image-3.png'),
            cid: 'unique3@nodemailer.com',
          },
          {
            filename: 'image-4.png',
            path: join(__dirname, '..', '..', 'src', 'templates', 'images', 'image-4.png'),
            cid: 'unique4@nodemailer.com',
          },
          {
            filename: 'image-5.png',
            path: join(__dirname, '..', '..', 'src', 'templates', 'images', 'image-5.png'),
            cid: 'unique5@nodemailer.com',
          },
          {
            filename: 'image-6.png',
            path: join(__dirname, '..', '..', 'src', 'templates', 'images', 'image-6.png'),
            cid: 'unique6@nodemailer.com',
          },
          {
            filename: 'image-7.png',
            path: join(__dirname, '..', '..', 'src', 'templates', 'images', 'image-7.png'),
            cid: 'unique7@nodemailer.com',
          },
          {
            filename: 'image-8.png',
            path: join(__dirname, '..', '..', 'src', 'templates', 'images', 'image-8.png'),
            cid: 'unique8@nodemailer.com',
          },
        ],
      })
      .then(messageInfo => {
        console.log(messageInfo);
      })
      .catch((e) => {
        console.log(e);
      });
  }
}
