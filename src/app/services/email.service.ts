import { Injectable } from '@angular/core';
import emailjs, { EmailJSResponseStatus } from 'emailjs-com';

@Injectable({
  providedIn: 'root',
})
export class EmailService {
  serviceId = 'service_w0z6z6g';
  templateId = 'contact_form';
  userId = 'dRvzaAp8aTa8BxGA1';

  constructor() {
    emailjs.init(this.userId);
  }

  sendEmail(params: any): Promise<EmailJSResponseStatus> {
    return emailjs.send(this.serviceId, this.templateId, params);
  }
}
