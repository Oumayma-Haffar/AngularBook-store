import { Component, OnInit } from '@angular/core';
import Book from '../Book';
import { BookService } from '../_service/book.service';
import { BookpanierService } from '../_service/bookpanier.service';

@Component({
  selector: 'app-bookpanier',
  templateUrl: './bookpanier.component.html',
  styleUrls: ['./bookpanier.component.css']
})
export class BookpanierComponent implements OnInit {

  availableBooks!:any;

  books!: Book[];
  quantities!: number[];
  total = 0;

  constructor(private cartService: BookpanierService, private bookService: BookService) { }

  ngOnInit(): void {
    this.books = this.cartService.getAllBooks();
    this.quantities = this.cartService.getAllQuantities();

    

    if(this.books != null){
        this.bookService.getAllBooks().subscribe(books => {
            this.availableBooks = books;
            this.books.forEach(book => {
                if(this.availableBooks.map((b:any) => b.id).indexOf(book.id) < 0 ) {
                    this.delete(book.id);
                    this.books = this.cartService.getAllBooks();
                }
            })

            for(let i=0; i<this.books.length; i++) {
                this.cartService.calculate(this.books[i].id, this.quantities[i]).subscribe(res => {
                    this.total += res;
                });
            }
        });

        
    }
  }

  purchase() {
      this.cartService.purchase();
      this.books = this.cartService.getAllBooks();
      for(let i=0; i<this.books.length; i++) {
        this.cartService.calculate(this.books[i].id, this.quantities[i]).subscribe(res => {
            this.total += res;
        });
    }  }

  delete(id: any): void {
    
    localStorage.removeItem('books');
    
    this.books = this.books.filter(book => {
        return book.id != id
    })  
    localStorage.setItem('books',JSON.stringify(this.books));
   

    this.cartService.remove(id);
    this.books = this.cartService.getAllBooks();

}

}
