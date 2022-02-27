import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { Veiculo } from '../veiculo.model';
import { VeiculosModule } from '../veiculos.module';
import { VeiculosService } from '../veiculos.service';
@Component({
  templateUrl: './form-saida.component.html',
  styleUrls: ['./form-saida.component.css']
})
export class FormSaidaComponent implements OnInit {
  vehicleExitForm!: FormGroup;
  constructor(public route: Router, 
    private aRoute:ActivatedRoute, 
    private vecService: VeiculosService,
    public vecModel: Veiculo) {
      vecModel = new Veiculo;
     }
  res:any;

  trata(resposta:any){
    this.res = resposta;
    this.vecModel.model = this.res.model;
    console.log(this.res.model.toString());
    this.createForm();
  }
  ngOnInit(): void {
    this.vecService.getVehicle(this.aRoute.snapshot.params['id']).subscribe((result) => this.trata(result));
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
  reloadComponent() {
    let currentUrl = this.route.url;
      this.route.routeReuseStrategy.shouldReuseRoute = () => false;
      this.route.onSameUrlNavigation = 'reload';
      this.route.navigate([currentUrl]);
  }
  onSubmit(vehicleExitForm:any): void{
    console.log()
    this.vecService.updateVehicle(this.res.id, vehicleExitForm.value).subscribe((resu) => console.warn(resu));
    this.reloadComponent();
    this.route.navigate(['/vehicles'])
  }
}
