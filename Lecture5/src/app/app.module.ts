import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ReactiveFormValidationExampleComponent } from './reactive-form-validation-example/reactive-form-validation-example.component';
import { TemplateDrivenFormsExampleComponent } from './template-driven-forms-example/template-driven-forms-example.component';

@NgModule({
  declarations: [
    AppComponent,
    ReactiveFormValidationExampleComponent,
    TemplateDrivenFormsExampleComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
