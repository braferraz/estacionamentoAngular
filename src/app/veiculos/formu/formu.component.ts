import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router'
@Component({
  selector: 'app-formu',
  templateUrl: './formu.component.html',
  styleUrls: ['./formu.component.css']
})

export class FormuComponent implements OnInit {
  public data : Date = new Date();
  veiculoForm!: FormGroup;
  submitted = false;

  constructor(private formBuilder: FormBuilder, public route: Router, private http: HttpClient) { }

  
  ngOnInit(): void {
    this.veiculoForm = new FormGroup({
      model: new FormControl(null, [Validators.required, Validators.minLength(2)]),
      numberPlate: new FormControl(null, [Validators.required, Validators.maxLength(8), Validators.minLength(7)]),
      entryDate:new FormControl(null)
    })
  }
  verifica(){
    return this.route.url === '/vehicles/edit';
  }
  verificaCampo(campo:any){
    return this.submitted && this.veiculoForm.controls[campo].errors;
  }

  verificaErro(campo:any, erro:any){
    return this.submitted && this.veiculoForm.controls[campo].errors?.[erro];
  }

  onSubmit(veiculoForm:any){
    this.submitted = true;
    
      console.log(this.veiculoForm)
      console.log("FF");
      this.http.post('/api/vehicles/new', veiculoForm.value)
      .subscribe((result)=>{
        console.warn("result " + result)
      });
      this.route.navigate(['/vehicles'])
  }
}
