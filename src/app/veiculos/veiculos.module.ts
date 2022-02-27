import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormEditComponent } from './form-edit/form-edit.component';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    FormEditComponent,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule, 
    RouterModule
  ]
})
export class VeiculosModule { }
