import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Veiculo } from '../veiculo.model';
import { VeiculosService } from '../veiculos.service';

@Component({
  templateUrl: './form-edit.component.html',
  styleUrls: ['./form-edit.component.css']
})
export class FormEditComponent implements OnInit {
  vecForm!: FormGroup;
  submitted: any;
  id:any;
  res:any;
  veci: Veiculo = new Veiculo;

  constructor(private formBuilder: FormBuilder,
    private router: Router,
    private aRoute: ActivatedRoute,
    private vecService: VeiculosService,
    public vecModel: Veiculo) { }

  ngOnInit(): void {
    this.id = this.aRoute.snapshot.params['id'];
    if (this.router.url === '/vehicles/edit/' + this.id){
      this.vecService.getVehicle(this.aRoute.snapshot.params['id']).subscribe((veci:any) => this.vecForm = new FormGroup({
        model: new FormControl(veci.model, [Validators.required, Validators.minLength(2)]),
        numberPlate: new FormControl(veci.numberPlate, [Validators.required, Validators.maxLength(8), Validators.minLength(7)])
    }));
    }
  }

  treat(resposta:any){
    this.res = resposta;
    this.vecModel.model = this.res.model;
    console.log(this.res.model.toString());
    this.createForm();
  }

  createForm(){
    this.vecForm = new FormGroup({
      model: new FormControl(this.res.model),
      numberPlate: new FormControl(this.res.numberPlate)
    })
  }
  onSubmit(vecForm: any){
    this.router.routeReuseStrategy.shouldReuseRoute = () => false;
    this.vecService.editVehicle(this.id, vecForm.value)
    .subscribe((result)=>{
    console.warn("result " + result);
    });
    this.router.navigated = true; 
    this.router.navigate([this.router.url]);
    this.router.navigate(['/vehicles']);
  }
  
  verificaCampo(campo:any){
    return this.submitted && this.vecForm.controls[campo].errors;
  }

  verificaErro(campo:any, erro:any){
    return this.submitted && this.vecForm.controls[campo].errors?.[erro];
  }

}
