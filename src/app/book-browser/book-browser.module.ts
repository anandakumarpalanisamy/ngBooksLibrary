import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BookBrowserComponent } from './containers/book-browser.component';
import { BookSearchComponent } from './components/book-search.component';
import { BookDetailsComponent } from './components/book-details.component';

@NgModule({
  imports: [CommonModule],
  declarations: [BookBrowserComponent, BookSearchComponent, BookDetailsComponent],
})
export class BookBrowserModule { }
