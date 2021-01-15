import { Component, OnInit } from '@angular/core';
import { BookService } from '../_service/book.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  id!: number;
  book : any;
  constructor(private service : BookService) { }

  ngOnInit(): void {
  }
  public getBook(){
    let response = this.service.getBookByid(this.id);
    response.subscribe(data => this.book = data);
  }

}
