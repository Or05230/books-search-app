import { Component, OnDestroy, OnInit } from '@angular/core';
import { GoogleBooksService } from '../../services/google-books.service';
import { BooksModel } from '../../../../../../libs/models/books.model';
import { Observable } from 'rxjs';

@Component({
  selector: 'books-search-app-favorites',
  templateUrl: './favorites.component.html',
  styleUrls: ['./favorites.component.scss'],
})
export class FavoritesComponent implements OnInit {
  favBooksList: Observable<BooksModel[]>

  constructor(private googleBooksService: GoogleBooksService) {
  }


  ngOnInit() {
    this.favBooksList = this.googleBooksService.favoritesList;
  }
}



