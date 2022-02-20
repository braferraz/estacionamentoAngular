import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { VeiculosComponent } from './veiculos/veiculos.component';
import { RetiradosComponent } from './veiculos/retirados/retirados.component';
import { FormuComponent } from './veiculos/formu/formu.component';
import { FormSaidaComponent } from './veiculos/form-saida/form-saida.component';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    VeiculosComponent,
    RetiradosComponent,
    FormuComponent,
    FormSaidaComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule, 
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
