import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BookOrderComponent } from './containers/book-order.component';
import { BookOrderFormComponent } from './components/book-order-form.component';
import { BookOrderConfiramtionComponent } from './components/book-order-confiramtion.component';

@NgModule({
  imports: [CommonModule],
  declarations: [BookOrderComponent, BookOrderFormComponent, BookOrderConfiramtionComponent]
})
export class BookOrderModule { }
