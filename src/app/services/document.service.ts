import { DOCUMENT } from '@angular/common';
import { Inject, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class DocumentService {
  constructor(@Inject(DOCUMENT) private doc: Document) {}

  updateDocTitle(title: string) {
    this.doc.title = `${title} - Joshua Torres Portfolio`;
  }
}
