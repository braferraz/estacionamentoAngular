import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { VeiculosService } from './veiculos.service';

@Component({
  templateUrl: './veiculos.component.html',
  styleUrls: ['./veiculos.component.css']
})

export class VeiculosComponent implements OnInit {

  vehicles: Array<any> = new Array();
  constructor(private route: Router,
    private vehicleService: VeiculosService) {
      this.route.routeReuseStrategy.shouldReuseRoute = function(){return false;}
    }

  classRouteVerify(rota1:any, rota2:any){
    return this.route.url  === rota1 || this.route.url === rota2;
  }
  routeVerify(rota:any){
    return this.route.url === rota
  }
  reloadComponent() {
    let currentUrl = this.route.url;
    this.route.routeReuseStrategy.shouldReuseRoute = () => false;
    this.route.onSameUrlNavigation = 'reload';
    this.route.navigate([currentUrl]);
  }
  ngOnInit(): void {
    this.vehicleService.listVehicles().subscribe(vehicles =>{
      this.vehicles = vehicles
    }, err => {
      console.warn('Erro ao listar todos veiculos', err);
    });
  }
}
