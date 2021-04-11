import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Component, Inject } from '@angular/core';
import { AppPopUpData } from '../../../../../../libs/models/app-pop-up-data.model';

@Component({
  templateUrl: './app-pop-up.component.html',
  styleUrls: ['./app-pop-up.component.scss']
})
export class AppPopUpComponent {
  constructor(
    public dialogRef: MatDialogRef<AppPopUpComponent>,
    @Inject(MAT_DIALOG_DATA) public data: { popUpData: AppPopUpData; content: string }
  ) {}
}
