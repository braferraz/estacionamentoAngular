import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { VeiculosService } from '../veiculos.service';
@Component({
  templateUrl: './form-saida.component.html',
  styleUrls: ['./form-saida.component.css']
})
export class FormSaidaComponent implements OnInit {
  vehicleExitForm!: FormGroup;
  constructor(public route: Router, private aRoute:ActivatedRoute, private vecService: VeiculosService) { }
  res:any;

  trata(resposta:any){
    this.res = resposta;
    
    console.log(this.res.model.toString())
    this.createForm();
    
    console.log(this.res);
  }
  ngOnInit(): void {
    this.vecService.getVehicle(this.aRoute.snapshot.params['id']).subscribe((result) => this.trata(result));
    
    console.log("AEBA");
    
  }
  createForm(){
    this.vehicleExitForm = new FormGroup({
      model: new FormControl(this.res.model),
      numberPlate: new FormControl(this.res.numberPlate),
      entryDate:new FormControl(this.res.entryDate),
      departureDate: new FormControl(this.res.departureDate),
      amount: new FormControl(this.res.amount),
      parkedTime: new FormControl(this.res.parkedTime)
    })
  }
  onSubmit(veiculoForm:any): void{

  }

}
