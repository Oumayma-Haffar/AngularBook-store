import { Injectable } from '@angular/core';
import { HttpClient ,HttpErrorResponse } from '@angular/common/http';
import Book from '../Book';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  url="http://localhost:8080/Practical_Exercise_SpringMVC/api/Book";
  constructor(private http : HttpClient) { 
   

  }
  getAllBooks(){
    return this.http.get("http://localhost:8080/Practical_Exercise_SpringMVC/api/Book/getAllBook");

  }
  deleteBook(id: number) {
    return this
              .http
              .delete(`${this.url}/deleteBook/${id}`);
  }
  getBookByid(id: number){
    return this.http.get(`${this.url}/getBook/${id}`);
  }
  getbyid(id: number) {
    return this.http.get(`${this.url}/getBook/${id}`);
}
updateBook( id: any,  author:string,  price:number,releasedate:Date, title:string){
  console.log('update service');
  let book: Book = new Book(id,author,price,releasedate,title);
  console.log(book);
  return this.http.post(`${this.url}/updateBook`,book);
  
}
  addBook(author: any, price: any, releasedate: any,title: any) {
    console.log(author, price, releasedate,title);
    const obj = {
      author,
      price,
      releasedate,
      title
    };
    this.http.post("http://localhost:8080/Practical_Exercise_SpringMVC/api/Book/addBook", obj,{responseType : "text" as "json"})
        .subscribe(res => console.log("done"));
        
  }}
