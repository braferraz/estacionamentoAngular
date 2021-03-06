import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router'
import { VeiculosService } from '../veiculos.service';

@Component({
  selector: 'app-formu',
  templateUrl: './formu.component.html',
  styleUrls: ['./formu.component.css']
})

export class FormuComponent implements OnInit {
  public data : Date = new Date();
  veiculoForm!: FormGroup;
  submitted = false;
  
  constructor(private formBuilder: FormBuilder, 
    private router: Router,
    private aRoute: ActivatedRoute,
    private vecService: VeiculosService
    ) {}

  ngOnInit(): void {
    this.router.routeReuseStrategy.shouldReuseRoute = () => false;
    this.veiculoForm = new FormGroup({
      model: new FormControl(null, [Validators.required, Validators.minLength(2)]),
      numberPlate: new FormControl(null, [Validators.required, Validators.maxLength(8), Validators.minLength(7)]),
      entryDate:new FormControl(null)
    })
  }
  // CRIAR FORM SEPARADO PARA EDIÇÃO, ASSIM PODERÁ OBTER DADOS MAIS QUE UMA VEZ

  verificaCampo(campo:any){
    return this.submitted && this.veiculoForm.controls[campo].errors;
  }

  verificaErro(campo:any, erro:any){
    return this.submitted && this.veiculoForm.controls[campo].errors?.[erro];
  }

  reloadComponent() {
    let currentUrl = this.router.url;
      this.router.routeReuseStrategy.shouldReuseRoute = () => false;
      this.router.onSameUrlNavigation = 'reload';
      this.router.navigate([currentUrl]);
  }

  onSubmit(veiculoForm:any){
    this.submitted = true;

    this.vecService.insertVehicle(veiculoForm.value)
      .subscribe((result)=>{
      console.warn("result " + result)
    });
    this.router.navigated = true; 
    this.router.navigate([this.router.url]);
    this.router.navigate(['/vehicles']);
  }
}
