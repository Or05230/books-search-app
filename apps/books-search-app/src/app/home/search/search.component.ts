import { Component, Input, AfterViewInit, ViewChild, Output, EventEmitter, ElementRef, OnDestroy } from '@angular/core';
import { fromEvent, Observable, of, Subscription } from 'rxjs';
import { debounceTime, distinctUntilChanged, map, switchMap } from 'rxjs/operators';


@Component({
  selector: 'books-search-app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
})
export class SearchComponent implements  AfterViewInit, OnDestroy {
  @ViewChild('searchInput', { static: true }) input: ElementRef;
  @Output() search = new EventEmitter<string>();
  @Input() placeholder: string;

  searchValue$: Observable<string>;
  searchSubscription: Subscription;
  constructor() {}



  ngAfterViewInit() {

    this.searchValue$ = fromEvent<any>(this.input.nativeElement, 'keyup').pipe(
      map((event) => event.target.value),
      debounceTime(400),
      distinctUntilChanged(),
      switchMap((search) => of(search))
    );

    this.searchSubscription = this.searchValue$.subscribe((value: string) => {
      this.search.emit(value);
    });
  }


  ngOnDestroy() {
    this.searchSubscription.unsubscribe();
  }

}
