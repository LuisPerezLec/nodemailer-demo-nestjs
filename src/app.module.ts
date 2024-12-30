import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MailerModule } from '@nestjs-modules/mailer';
import { HandlebarsAdapter } from '@nestjs-modules/mailer/dist/adapters/handlebars.adapter';
import { MailService } from './mail/mail.service';
import { ConfigModule } from '@nestjs/config';
import { join } from 'path';

@Module({
  imports: [
    ConfigModule.forRoot({ envFilePath: '.env', isGlobal: true }),
    MailerModule.forRoot({
      transport: {
        host: process.env.EMAIL_HOST,
        port: 465,
        secure: true,
        auth: {
          user: process.env.EMAIL_USERNAME,
          pass: process.env.EMAIL_PASSWORD,
        },
      },
      defaults: {
        from: '"nest-modules" <modules@nestjs.com>',
        preview: true,
      },
      template: {
        dir: join(__dirname, '..','src', 'templates'),
        adapter: new HandlebarsAdapter(),
        options: {
          strict: true,
        },
      },
      preview: true,
    }),
  ],
  controllers: [AppController],
  providers: [AppService, MailService],
})
export class AppModule {}
