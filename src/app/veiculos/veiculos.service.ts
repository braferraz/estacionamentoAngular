import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class VeiculosService {

  constructor(private http:HttpClient) { }

  listVehicles(): Observable<any>{
    return this.http.get<any[]>('/api/vehicles')
  }
  getVehicle(id:any){
    return this.http.get('/api/vehicles/exit/' + `${id}`)
  }
}
