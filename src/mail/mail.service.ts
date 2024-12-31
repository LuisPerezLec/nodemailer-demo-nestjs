import { Injectable } from '@nestjs/common';
import { MailerService } from '@nestjs-modules/mailer';
import { join } from 'path';

@Injectable()
export class MailService {
  constructor(private readonly mailerService: MailerService) {}

  // Método para enviar el correo
  public async sendConfirmationEmail(to: string, context: object): Promise<void> {
    try {
      const result = await this.mailerService.sendMail({
        to, // receptor dinámico
        from: 'pruebas.informatica@upa.edu.mx', // remitente estático
        subject: 'Confirmación ✔', // asunto
        template: 'confirmacion/index', // plantilla
        context, // contexto dinámico
        attachments: this.getAttachments(), // adjuntos generados por función auxiliar
      });

      console.log("Correo enviado:", result);
    } catch (error) {
      console.error("Error al enviar el correo:", error);
    }
  }

  // Función auxiliar para generar los adjuntos
  private getAttachments() {
    const imagePaths = [
      'image-1.png', 'image-2.jpeg', 'image-3.png', 'image-4.png', 
      'image-5.png', 'image-6.png', 'image-7.png', 'image-8.png'
    ];

    return imagePaths.map((image, index) => ({
      filename: image,
      path: join(__dirname, '..', 'templates', 'confirmacion', 'images', image),
      cid: `unique${index + 1}@nodemailer.com`, // generar CID dinámico
    }));
  }
}
