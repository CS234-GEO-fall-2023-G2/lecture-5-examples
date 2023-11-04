import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Book } from '../shared/models/book-mode';

@Component({
  selector: 'app-template-driven-forms-example',
  templateUrl: './template-driven-forms-example.component.html',
  styleUrls: ['./template-driven-forms-example.component.css']
})
export class TemplateDrivenFormsExampleComponent implements OnInit {

  // //--------1--------------
  title: string = 'title'
  title2: string = 'title2'
  title3: string = 'title3'


  //--------2--------------
  // onSubmit(bookForm: NgForm){
  //   console.log(bookForm);
  //   console.log(bookForm.value);
  // }


  // //--------3--------------
  // onSubmit(bookForm: NgForm){
  //   console.log(bookForm);
  //   console.log(bookForm.value);
  // }

  //--------4/5--------------
  model: Book = {title: 'title', author: 'author', pages: '100'};
  onSubmit(bookForm: NgForm){
    console.log(bookForm);
    console.log(bookForm.value);
    console.log(this.model);
  }


  constructor() { }

  ngOnInit(): void {
  }

}
