import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BookOrderModule} from './book-order/book-order.module';
import {BookBrowserModule} from './book-browser/book-browser.module';
import {SharedModule} from './shared/shared.module';
import { AppComponent } from './app.component';
import {RouterModule} from '@angular/router';
import {routes} from './app.routes';

@NgModule({
  declarations: [AppComponent ],
  imports: [
    RouterModule.forRoot(routes),
    BrowserModule, SharedModule, BookOrderModule, BookBrowserModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
