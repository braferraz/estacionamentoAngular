import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class VeiculosService {

  constructor(private http:HttpClient) { }

  insertVehicle(vehicle:any){
    return this.http.post('/api/vehicles/new', vehicle);
  }
  updateVehicle(id:number, vehicle:any ){
    return this.http.put('/api/vehicles/exit/'+ `${id}`, vehicle);
  }
  editVehicle(id:number, vehicle:any ){
    return this.http.put('/api/vehicles/edit/'+ `${id}`, vehicle);
  }
  listVehicles(): Observable<any>{
    return this.http.get<any[]>('/api/vehicles')
  }
  getVehicle(id:any){
    return this.http.get('/api/vehicles/exit/' + `${id}`)
  }
  getVehicleRemoved(){
    return this.http.get<any[]>('/api/vehicles/removed');
  }
}
