import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DocumentService } from '../services/document.service';
import { EmailService } from '../services/email.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
})
export class ContactComponent implements OnInit {
  title = 'Contact';

  name: string = '';
  email: string = '';
  message: string = '';

  constructor(
    private router: Router,
    private emailService: EmailService,
    private docService: DocumentService
  ) {}

  ngOnInit(): void {
    this.docService.updateDocTitle(this.title);
  }

  onSubmit(): void {
    if (!this.validateEmail(this.email)) {
      this.email = 'INVALID';
    } else if (this.name && this.email && this.message) {
      this.sendMessage();
    } else {
      alert('Missing value(s). Message not sent.');
    }
  }

  sendMessage(): void {
    this.emailService.sendEmail(this.params);

    alert('Sucess! Your message has been sent.');

    this.reloadComponent();
  }

  get params(): object {
    return {
      name: this.name.trim().split(/\s+/).join(' '),
      email: this.email.trim(),
      message: this.message.trim().split(/\s+/).join(' '),
      contact_number: (Math.random() * 100000) | 0,
    };
  }

  validateEmail(email: string): boolean {
    const re =
      /^(([^<>()\]\\.,;:\s@"]+(\.[^<>()\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  }

  reloadComponent(): void {
    // Hack: Reloads the component
    this.router.navigate(['/']).then((nav) => {
      this.router.navigate(['/', 'contact']);
    });
  }
}
