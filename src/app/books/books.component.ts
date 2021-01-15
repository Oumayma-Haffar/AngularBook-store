import { Component, OnInit } from '@angular/core';
import { BookService } from '../_service/book.service';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent implements OnInit {

  books!:any

  constructor(private bs: BookService) { }

  ngOnInit(): void {
    let response = this.bs.getAllBooks();
    response.subscribe(data => this.books = data);
    

}

deleteBook(id: any) {
  this.bs.deleteBook(id).subscribe(res => {
  this.books.splice(id,1);
  });
 }
}
