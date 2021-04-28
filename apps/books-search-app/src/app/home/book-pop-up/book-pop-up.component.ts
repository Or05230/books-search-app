import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Component, Inject, OnInit } from '@angular/core';

import { BooksModel } from '../../../../../../libs/models/books.model';
import { GoogleBooksService } from '../../services/google-books.service';

@Component({
  templateUrl: './book-pop-up.component.html',
  styleUrls: ['./book-pop-up.component.scss'],
})
export class BookPopUpComponent implements OnInit {
  isFav = false;
  constructor(
    public dialogRef: MatDialogRef<BookPopUpComponent>,
    private googleBooksService: GoogleBooksService,
    @Inject(MAT_DIALOG_DATA) public data: { popUpData: BooksModel; title_exit_icon: string; title: string }
  ) {}

  ngOnInit() {
    this.isBookInFav()
  }


  onRemoveOrAddBookToFav(book: BooksModel) {
    this.googleBooksService.addOrRemoveFavorites(book);
  }

  isBookInFav() {
    this.googleBooksService.favoritesList.subscribe(booksArr => {
      this.isFav = booksArr.some(book => book.id === this.data.popUpData.id)
    })
  }


}
