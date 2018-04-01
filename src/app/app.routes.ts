import {Routes} from '@angular/router';
import {BookBrowserComponent} from './book-browser/containers/book-browser.component';
import {BookOrderComponent} from './book-order/containers/book-order.component';

export const routes: Routes = [
  {path: '', redirectTo: '', pathMatch: 'full'},
  {path: 'search', component: BookBrowserComponent },
  {path: 'order', component: BookOrderComponent },
];
