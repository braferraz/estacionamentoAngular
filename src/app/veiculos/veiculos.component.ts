import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { VeiculosService } from './veiculos.service';
@Component({
  templateUrl: './veiculos.component.html',
  styleUrls: ['./veiculos.component.css']
})
export class VeiculosComponent implements OnInit {

  vehicles: Array<any> = new Array();
  constructor(public route: Router,
    private vehicleService: VeiculosService) { }

  verifica(rota:any){
    return this.route.url === rota
  }
  ngOnInit(): void {
    this.vehicleService.listVehicles().subscribe(vehicles =>{
      this.vehicles = vehicles
    }, err => {
      console.warn('Erro ao listar todos veiculos', err);
    });
  }
  

}
