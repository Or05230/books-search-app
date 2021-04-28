import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { _MatMenuDirectivesModule, MatMenuModule } from '@angular/material/menu';

import { BooksTableComponent } from './books-table.component';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatTableModule } from '@angular/material/table';
import { CommonModule } from '@angular/common';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatRippleModule } from '@angular/material/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatTooltipModule } from '@angular/material/tooltip';
import { EllipsisPipe } from '../../../../../../libs/pipes/ellipsis.pipe';
import { BookPopUpModule } from '../book-pop-up/book-pop-up.module';

@NgModule({
  declarations: [BooksTableComponent, EllipsisPipe],
  imports: [
    MatProgressSpinnerModule,
    MatTableModule,
    BookPopUpModule,
    CommonModule,
    MatPaginatorModule,
    MatSortModule,
    FormsModule,
    MatIconModule,
    MatButtonModule,
    MatRippleModule,
    MatSortModule,
    MatToolbarModule,
    MatTooltipModule,
    _MatMenuDirectivesModule,
    MatMenuModule,
  ],
  bootstrap: [BooksTableComponent],
  exports: [
    BooksTableComponent
  ]
})
export class BooksTableModule {}
