import { MatIconModule } from '@angular/material/icon';
import { CommonModule } from '@angular/common';
import { MatDialogModule } from '@angular/material/dialog';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

import { BookPopUpComponent } from './book-pop-up.component';
import { MatCardModule } from '@angular/material/card';
import { MatTooltipModule } from '@angular/material/tooltip';

@NgModule({
  declarations: [BookPopUpComponent],
  entryComponents: [BookPopUpComponent],
  exports: [BookPopUpComponent],
  imports: [MatIconModule, CommonModule, MatTooltipModule, MatCardModule, MatInputModule, MatDialogModule, MatButtonModule, FormsModule, ReactiveFormsModule, MatFormFieldModule],
})
export class BookPopUpModule {}
