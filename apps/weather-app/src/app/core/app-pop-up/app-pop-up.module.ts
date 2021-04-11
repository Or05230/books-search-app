import { MatIconModule } from '@angular/material/icon';
import { CommonModule } from '@angular/common';
import { MatDialogModule } from '@angular/material/dialog';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { AppPopUpComponent } from './app-pop-up.component';

@NgModule({
  declarations: [AppPopUpComponent],
  entryComponents: [AppPopUpComponent],
  exports: [AppPopUpComponent],
  imports: [MatIconModule, CommonModule, MatDialogModule, MatButtonModule]
})
export class AppPopUpModule {}
