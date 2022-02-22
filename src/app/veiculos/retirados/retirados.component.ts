import { Component, OnInit } from '@angular/core';
import { VeiculosService } from '../veiculos.service';

@Component({
  selector: 'app-retirados',
  templateUrl: './retirados.component.html',
  styleUrls: ['./retirados.component.css']
})
export class RetiradosComponent implements OnInit {

  vehicles: Array<any> = new Array();
  constructor(private vehicleService: VeiculosService) { }

  ngOnInit(): void {
    this.vehicleService.getVehicleRemoved().subscribe(vehicles =>{
      this.vehicles = vehicles
    }, err => {
      console.warn('Erro ao listar os veiculos retirados', err);
    });
  }

}
