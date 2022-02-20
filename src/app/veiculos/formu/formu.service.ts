import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { VeiculosComponent } from '../veiculos.component';
@Injectable({
  providedIn: 'root'
})
export class FormuService {

  
  
  constructor(private http: HttpClient) { }

}
