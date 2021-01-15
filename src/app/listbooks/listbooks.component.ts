import { Component, OnInit } from '@angular/core';
import Book from '../Book';
import { BookService } from '../_service/book.service';
import { BookpanierService } from '../_service/bookpanier.service';

@Component({
  selector: 'app-listbooks',
  templateUrl: './listbooks.component.html',
  styleUrls: ['./listbooks.component.css']
})
export class ListbooksComponent implements OnInit {

  books!:any

  constructor(private bs: BookService,private cs :BookpanierService) { }

  ngOnInit(): void {
    let response = this.bs.getAllBooks();
    response.subscribe(data => this.books = data);
    

}
addToCart(id: any,quantity: any): void {
  this.bs.getbyid(id).subscribe(book => {
      this.cs.add(book,quantity);
  });
}



}
