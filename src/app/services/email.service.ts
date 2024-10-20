import { Injectable } from '@angular/core';
import emailjs from 'emailjs-com';

@Injectable({
  providedIn: 'root'
})
export class EmailService {
  private apiKey: string = 'mBBXBbmMYopJnTXFB';
  private serviceId: string = 'service_2fcx9hz';
  private templateId: string = 'template_qtnxe53';

  constructor() { 
    emailjs.init(this.apiKey);
  }

  sendEmail(name: string, email: string, message: string): Promise<any> {
    const templateParams = {
      from_name: name,
      from_email: email,
      message: message
    };

    return emailjs.send(this.serviceId, this.templateId, templateParams)
      .then(response => {
        console.log('Email sent successfully!', response);
        return response;
      })
      .catch(error => {
        console.error('Error sending email:', error);
        throw error;
      });
  }
}
