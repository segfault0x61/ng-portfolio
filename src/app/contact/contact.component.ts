import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { DocumentService } from '../services/document.service';
import { EmailService } from '../services/email.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
})
export class ContactComponent implements OnInit {
  title = 'Contact';

  public name: string = '';
  public email: string = '';
  public message: string = '';

  public snackBar = {
    show: false,
    text: '',
  };

  constructor(
    private docService: DocumentService,
    private emailService: EmailService
  ) {}

  ngOnInit(): void {
    this.docService.updateDocTitle(this.title);
  }

  onSubmit(form: NgForm): void {
    if (!this.validateEmail(this.email)) {
      this.email = '';
    } else if (this.name && this.email && this.message) {
      this.sendEmail(this.params, form);
    } else {
      this.showSnackBar('Missing value(s). Message not sent.');
    }
  }

  get params(): object {
    return {
      name: this.name.trim(),
      email: this.email.trim(),
      message: this.message.trim(),
      contact_number: (Math.random() * 100000) | 0,
    };
  }

  sendEmail(params: any, form: NgForm): void {
    this.emailService.sendEmail(params).then(
      (res) => {
        form.reset();
        this.showSnackBar('Your message has been sent');
        console.log('SUCCESS!', res.status, res.text);
      },
      (error) => {
        this.showSnackBar('Error, message not sent');
        console.log('FAILED...', error);
      }
    );
  }

  validateEmail(email: string): boolean {
    const re =
      /^(([^<>()\]\\.,;:\s@"]+(\.[^<>()\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  }

  showSnackBar(text: string) {
    this.snackBar = {
      show: true,
      text,
    };

    setTimeout(() => {
      this.snackBar.show = false;
    }, 10000);
  }
}
