import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HomeComponent } from './home.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { SearchModule } from './search/search.module';
import { CoreModule } from '../core/core.module';
import { BooksTableModule } from './books-table/books-table.module';
import { BookPopUpModule } from './book-pop-up/book-pop-up.module';

@NgModule({
  declarations: [HomeComponent],
  imports: [SearchModule, BrowserModule, MatToolbarModule, MatButtonModule, MatCardModule, CoreModule, BooksTableModule, BookPopUpModule],
  bootstrap: [HomeComponent],
  exports: []
})
export class HomeModule {}
