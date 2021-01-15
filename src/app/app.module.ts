import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListbooksComponent } from './listbooks/listbooks.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AddbookComponent } from './addbook/addbook.component';
import { BookpanierComponent } from './bookpanier/bookpanier.component';
import { BookService } from './_service/book.service';
import { NavbarComponent } from './navbar/navbar.component';
import { NavuserComponent } from './navuser/navuser.component';
import { BooksComponent } from './books/books.component';
import { SearchComponent } from './search/search.component';

@NgModule({
  declarations: [
    AppComponent,
    ListbooksComponent,
    AddbookComponent,
    BookpanierComponent,
    NavbarComponent,
    NavuserComponent,
    BooksComponent,
    SearchComponent  ],
  imports: [
    BrowserModule,
    AppRoutingModule, BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule, 
    ReactiveFormsModule
  ],
  providers: [BookService],
  bootstrap: [AppComponent]
})
export class AppModule { }
