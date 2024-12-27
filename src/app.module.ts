import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MailerModule } from '@nestjs-modules/mailer';
import { HandlebarsAdapter } from '@nestjs-modules/mailer/dist/adapters/handlebars.adapter';
import { MailService } from './mail/mail.service';

@Module({
  imports: [
      MailerModule.forRoot({
        transport: {
          host: 'smtp.gmail.com',
          port: 465,
          secure: true,
          auth: {
            user: 'pruebas.informatica@upa.edu.mx',
            pass: 'test2024a',
          },
        },
        defaults: {
          from: '"nest-modules" <modules@nestjs.com>',
          preview: true,
        },
        template: {
          dir: __dirname + 'templates',
          adapter: new HandlebarsAdapter(),
          options: {
            strict: true,
          },
        },
      }),
    ],
  controllers: [AppController],
  providers: [AppService, MailService],
})
export class AppModule {

}

