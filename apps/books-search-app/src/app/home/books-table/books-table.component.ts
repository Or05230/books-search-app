import { Component, OnInit, Input, ViewChild, ChangeDetectorRef, AfterViewInit, OnDestroy } from '@angular/core';

import { Router } from '@angular/router';
import { merge, Observable, Subscription } from 'rxjs';
import { tap } from 'rxjs/operators';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { BooksData } from './books.data';
import { MatDialog } from '@angular/material/dialog';
import { GoogleBooksService } from '../../services/google-books.service';
import { BooksFilterModel } from '../../../../../../libs/models/books.filter.model';
import { BooksModel } from '../../../../../../libs/models/books.model';
import { BookPopUpComponent } from '../book-pop-up/book-pop-up.component';

@Component({
  selector: 'books-search-app-table',
  templateUrl: './books-table.component.html',
  styleUrls: ['./books-table.component.scss'],
})
export class BooksTableComponent implements OnInit, AfterViewInit, OnDestroy {
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;
  @Input() events: Observable<BooksFilterModel>;

  length = 5;
  displayedColumns: String[] = ['No','Thumbnail', 'Title'];
  dataSource: BooksData;
  filter = {} as BooksFilterModel;
  pageSize = 5;
  thumbnailWidth = 40;
  thumbnailHeight = 40;
  bookTitleMaxLength = 40;
  eventsSubscription: Subscription;


  constructor(
    private dialog: MatDialog,
    private router: Router,
    private cdr: ChangeDetectorRef,
    private googleBooksService: GoogleBooksService

  ) {}

  ngOnInit() {
    this.dataSource = new BooksData(this.googleBooksService);

  }

  ngAfterViewInit() {

    this.dataSource.getLength().subscribe((newLength) => {

      this.length = newLength;
    });


    this.eventsSubscription = this.events.subscribe((data: BooksFilterModel) => {
      this.filter = data;
      this.paginator.pageIndex = 0;
      this.loadBooks();
    });

    // Update table event
    merge(this.paginator.page)
      .pipe(tap(() => this.loadBooks()))
      .subscribe();
    this.cdr.detectChanges();
  }


  loadBooks() {
    const pageIndex = this.paginator.pageIndex + (this.paginator.pageIndex*(this.paginator.pageSize-1));

   this.dataSource.loadBooks(this.filter, null, pageIndex, this.paginator.pageSize);

  }

  openExpandedInfoDialog(row: BooksModel) {
    const dialogRef = this.dialog.open(BookPopUpComponent, {
      autoFocus: true,
      restoreFocus: false,
      hasBackdrop: true,
      backdropClass: 'dialog-open',
      width: '500px',
      data: {
        popUpData: row,
        title_exit_icon: 'clear',

      },
    });
  }

  ngOnDestroy() {
    this.eventsSubscription.unsubscribe();
  }


}
