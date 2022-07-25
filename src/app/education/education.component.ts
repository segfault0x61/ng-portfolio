import { Component, OnInit } from '@angular/core';
import { DocumentService } from '../services/document.service';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.scss'],
})
export class EducationComponent implements OnInit {
  title = 'Education';

  constructor(private docService: DocumentService) {}

  ngOnInit(): void {
    this.docService.updateDocTitle(this.title);
  }
}
