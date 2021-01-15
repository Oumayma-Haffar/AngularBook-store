import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { BookService } from '../_service/book.service';

@Component({
  selector: 'app-addbook',
  templateUrl: './addbook.component.html',
  styleUrls: ['./addbook.component.scss']
})
export class AddbookComponent implements OnInit {

  angForm!: FormGroup;
  constructor(private fb: FormBuilder, private ps: BookService) {
    this.createForm();
  }

  createForm() {
    this.angForm = this.fb.group({
      title: ['', Validators.required ],
      author: ['', Validators.required ],
      price: ['', Validators.required ],
      releasedate: ['', Validators.required ]

    });
  }

  addBook(author: any, price: any, releasedate: any,title: any) {
    this.ps.addBook(author, price, releasedate,title);
  }

  ngOnInit(): void {
  }

}
