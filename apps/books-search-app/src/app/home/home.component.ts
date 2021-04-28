import { Component, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { BooksFilterModel } from '../../../../../libs/models/books.filter.model';

@Component({
  selector: 'books-search-app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  filter: BooksFilterModel = {} as BooksFilterModel;
  filter$: BehaviorSubject<BooksFilterModel>;
  placeholder = 'Search by book name'
  constructor() {}

  ngOnInit(): void {
    this.filter$ = new BehaviorSubject<any>(this.filter);
    this.filter$.next(this.filter);
  }


  onSearchEvent(event) {
    this.filter$.next({ search: { name: event } });
    this.filter$.next(this.filter)
  }

}
