import { CommonModule } from '@angular/common';
import { NgModule,CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RxReactiveFormsModule } from '@rxweb/reactive-form-validators';
import { MultilingualValidationMessageCompleteComponent } from './complete/multilingual-validation-message-complete.component';



@NgModule({
  declarations: [
    MultilingualValidationMessageCompleteComponent
  ],
entryComponents: [
	MultilingualValidationMessageCompleteComponent
  ],
  imports: [
    CommonModule,HttpClientModule,ReactiveFormsModule,FormsModule,RxReactiveFormsModule
  ],
  providers: [],
  bootstrap: [],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  exports: [
    MultilingualValidationMessageCompleteComponent
  ],

})
export class  MultilingualValidationMessageDecoratorsExtendedModule { }