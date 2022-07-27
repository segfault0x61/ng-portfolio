import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-snack-bar',
  templateUrl: './snack-bar.component.html',
  styleUrls: ['./snack-bar.component.scss'],
})
export class SnackBarComponent {
  @Input() snackBar = {
    show: false,
    text: '',
  };
}
