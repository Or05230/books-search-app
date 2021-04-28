import { Injectable, OnDestroy } from '@angular/core';
import {
   BOOK_BY_NAME_URL
} from '../../../../../libs/models/url.consts';
import { HttpClient, HttpParams } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { BooksModel } from '../../../../../libs/models/books.model';
import { filter, find, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
// @ts-ignore
export class GoogleBooksService {
   favorites$ = new BehaviorSubject<BooksModel[]>([]);
   favoritesList = this.favorites$.asObservable();

  constructor(private httpClient : HttpClient) {
  }

  getBooksByName(bookName : string, maxResults: string, startIndex: string) : Observable<any>{ // TODO CHANGE TO MODEL
    return this.httpClient.get<any>(
      BOOK_BY_NAME_URL + `?q=${bookName}`,
      { params: new HttpParams()
          .append('startIndex', startIndex)
          .append('maxResults', maxResults)

      }
    )
  }

  addOrRemoveFavorites(book: BooksModel) {
    const currentValue = this.favorites$.getValue();
    if (this.favorites$.getValue().length) {
      const foundBook = currentValue.find(bookObj => bookObj.id === book.id);
        if (foundBook) {
          this.removeBookFromFav(currentValue, foundBook)
        } else {
          this.addBookToFav(currentValue, book)
        }
    } else this.addBookToFav(currentValue, book)
  }

  removeBookFromFav(currentValue, foundBook) {
    currentValue.splice(currentValue.indexOf(foundBook), 1);
    this.favorites$.next(currentValue);
  }

  addBookToFav(currentValue, book) {

    const updatedValue = [...currentValue, book];
    this.favorites$.next(updatedValue);
  }

}
