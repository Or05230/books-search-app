import { CollectionViewer, DataSource } from '@angular/cdk/collections';
import { BehaviorSubject, Observable } from 'rxjs';
import { GoogleBooksService } from '../../services/google-books.service';
import { BooksFilterModel } from '../../../../../../libs/models/books.filter.model';
import { BooksModel } from '../../../../../../libs/models/books.model';
import { map, tap } from 'rxjs/operators';

export class BooksData implements DataSource<BooksModel> {
  private books = new BehaviorSubject<BooksModel[]>([]);
  private loading = new BehaviorSubject<boolean>(false);
  private length = new BehaviorSubject<number>(10);
  searchQuery = null;

  public loading$ = this.loading.asObservable();

  constructor(private googleBooksService: GoogleBooksService) {}

  getLength(): Observable<number> {
    return this.length.asObservable();
  }

  connect(collectionViewer: CollectionViewer): Observable<BooksModel[]> {
    return this.books.asObservable();
  }

  disconnect(collectionViewer: CollectionViewer): void {
    this.books.complete();
    this.loading.complete();
  }

  loadBooks(filter: BooksFilterModel = {} as BooksFilterModel, sort: BooksFilterModel = {} as BooksFilterModel, pageIndex = 0, pageSize = 5) {
    this.loading.next(true);
    let totalItems: number;
    if (filter?.search?.name) {
      this.searchQuery = filter.search.name
    }
    this.googleBooksService.getBooksByName(this.searchQuery, String(pageSize), String(pageIndex)).pipe(tap(res=> {
      totalItems = res?.totalItems;
    }),map(val => val.items)).subscribe(
      (res: BooksModel[]) => {
        if (res) {
          this.books.next(res);
          this.length.next(totalItems> 20? 20: totalItems);
        } else {
          this.length.next(0);
        }
        this.loading.next(false);

      },
      (error) => {
        console.log('error:');
        console.log(error);
        this.loading.next(false);
      }
    );
  }
}
