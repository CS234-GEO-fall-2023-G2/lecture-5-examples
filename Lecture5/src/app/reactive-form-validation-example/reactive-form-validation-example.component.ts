import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';
import { Language } from '../shared/models/language-model';

@Component({
  selector: 'app-reactive-form-validation-example',
  templateUrl: './reactive-form-validation-example.component.html',
  styleUrls: ['./reactive-form-validation-example.component.css']
})
export class ReactiveFormValidationExampleComponent implements OnInit {

  // --------------------Built-in validators ---------------------
  languages: Language[] = [
    {id: 1, name: 'Georgian'},
    {id: 1, name: 'English'},
    {id: 1, name: 'German'},
    {id: 1, name: 'Spanish'},
  ]

  bookForm = new FormGroup({
    title: new FormControl('', Validators.required),
    author: new FormControl('', [Validators.required, Validators.maxLength(5)]),
    pages: new FormControl('', Validators.pattern('^([1-9][0-9])*$')),
    isInStocke: new FormControl(false),
    language: new FormControl('', Validators.required)
  });
  
  get title() { return this.bookForm.controls['title'] }
  get author() { return this.bookForm.controls['author'] }
  get pages() { return this.bookForm.controls['pages'] }

  onSubmit(){
    console.log(this.bookForm);
    console.log(this.bookForm.value);
  }




  // --------------------Custom validators ---------------------
  // bookForm = new FormGroup({
  //   title: new FormControl('', [Validators.required, this.forbiddenTitle('title')]),
  //   author: new FormControl('', [Validators.required, Validators.maxLength(5)]),
  //   pages: new FormControl('', Validators.pattern('^([1-9][0-9])*$'))
  // });
  
  // get title() { return this.bookForm.controls['title'] }
  // get author() { return this.bookForm.controls['author'] }
  // get pages() { return this.bookForm.controls['pages'] }

  // forbiddenTitle(title: string): ValidatorFn {
  //   return(control: AbstractControl): ValidationErrors | null => {
  //     console.log(title)
  //     return title == control.value ? {forbiddenTitle: {value: control.value}} : null;
  //   }
  // }

  // onSubmit(){
  //   console.log(this.bookForm);
  //   console.log(this.bookForm.value);
  // }



  // // --------------------Cross-field validators ---------------------
  // customValidator: ValidatorFn = (control: AbstractControl): ValidationErrors | null => {
  //   let author = control.get('author').value;
  //   let author2 = control.get('author2').value;

  //   return author === author2 ? {identicalAuthors: true} : null;
  // };

  // bookForm = new FormGroup({
  //   title: new FormControl('', [Validators.required]),
  //   author: new FormControl('', [Validators.required, Validators.maxLength(5)]),
  //   author2: new FormControl(''),
  //   pages: new FormControl('', Validators.pattern('^([1-9][0-9])*$'))
  // }, {validators: this.customValidator});
  

  // get title() { return this.bookForm.controls['title'] }
  // get author() { return this.bookForm.controls['author'] }
  // get author2() { return this.bookForm.controls['author2'] }
  // get pages() { return this.bookForm.controls['pages'] }

  // onSubmit(){
  //   console.log(this.bookForm);
  //   console.log(this.bookForm.value);
  // }


  constructor() { }

  ngOnInit(): void {
  }
}
