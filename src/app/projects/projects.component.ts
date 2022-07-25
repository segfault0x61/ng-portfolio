import { Component, OnInit } from '@angular/core';
import { DocumentService } from '../services/document.service';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss'],
})
export class ProjectsComponent implements OnInit {
  title = 'Projects';

  constructor(private docService: DocumentService) {}

  ngOnInit(): void {
    this.docService.updateDocTitle(this.title);
  }
}
