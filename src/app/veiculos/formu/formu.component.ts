import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { concatMapTo } from 'rxjs';


@Component({
  selector: 'app-formu',
  templateUrl: './formu.component.html',
  styleUrls: ['./formu.component.css']
})

export class FormuComponent implements OnInit {
  public data : Date = new Date();
  veiculoForm!: FormGroup;
  submitted = false;
  
  constructor(private formBuilder: FormBuilder, public route: Router) { }

  
  ngOnInit(): void {
    this.veiculoForm = new FormGroup({
      modelo: new FormControl(null, [Validators.required, Validators.minLength(2)]),
      placa: new FormControl(null, [Validators.required, Validators.maxLength(8), Validators.minLength(7)]),
      dataEntrada:new FormControl(null)
    })
  }
  verifica(){
    return this.route.url === '/veiculos/editar';
  }
  verificaCampo(campo:any){
    return this.submitted && this.veiculoForm.controls[campo].errors;
  }

  verificaErro(campo:any, erro:any){
    return this.submitted && this.veiculoForm.controls[campo].errors?.[erro];
  }

  onSubmit(){
    console.log(this.veiculoForm.controls['modelo'].errors?.['minlength']);
    this.submitted = true;
    if(!this.veiculoForm.valid){
      console.log("Erro!");
      
    }
    else{
      console.warn(this.veiculoForm.value);
    }
  }
}
