import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import Book from '../Book';

@Injectable({
  providedIn: 'root'
})
export class BookpanierService {

  uri: string = "http://localhost:8080/Practical_Exercise_SpringMVC/api/Book";

  books: Book[] = [];
  quantities: number[] = [];

  constructor(private http: HttpClient) { }

  add(book: Book, quantity: number) {
    console.log(localStorage.getItem('books'));  
    this.books = JSON.parse(localStorage.getItem('books')!) == null ? [] : JSON.parse(localStorage.getItem('books')!);
    console.log(this.books);
    this.books.push(book);
    console.log(this.books);
    this.quantities.push(quantity);
    localStorage.setItem('books',JSON.stringify(this.books));
    localStorage.setItem('quantities',JSON.stringify(this.quantities));
  }

  getAllBooks(): Book[] {
    return JSON.parse(localStorage.getItem('books')!);
    //return this.books;
  }

  getAllQuantities(): number[] {
    return JSON.parse(localStorage.getItem('quantities')!);
    //return this.quantities;
  }

  calculate(id?: number, qte?: number) {
    return this.http.get<number>(`${this.uri}/calculerPrix/${id}/${qte}`);
  }

  purchase() {
    localStorage.removeItem('books');
    localStorage.removeItem('quantities');
  }

  remove(id: number): void {
    let q: number[] = [];
    let i = 0;
    
    this.books = this.getAllBooks().filter(book => {
        if(book.id != id) {
            q.push(this.quantities[i]);
            i++;
            return book;
        }else{return true};
    });

    this.quantities = q;
    localStorage.setItem('books',JSON.stringify(this.books));
    console.log(JSON.parse(localStorage.getItem('books')!));
  }}
