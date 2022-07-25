import { Component, OnInit } from '@angular/core';
import { DocumentService } from '../services/document.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
})
export class ContactComponent implements OnInit {
  title = 'Contact';

  constructor(private docService: DocumentService) {}

  ngOnInit(): void {
    this.docService.updateDocTitle(this.title);
  }
}
