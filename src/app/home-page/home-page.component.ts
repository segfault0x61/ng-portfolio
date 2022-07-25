import { Component, OnInit } from '@angular/core';
import { DocumentService } from '../services/document.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss'],
})
export class HomePageComponent implements OnInit {
  title = 'Home';

  constructor(private docService: DocumentService) {}

  ngOnInit(): void {
    this.docService.updateDocTitle(this.title);
  }
}
