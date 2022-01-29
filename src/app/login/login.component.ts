import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {


  loginForm = this.formBuilder.group({
    usuario: ["", String, Validators.required, Validators.minLength(3)],
    senha: ["", String,  Validators.required, Validators.minLength(5)]
  })

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
  }

  onSubmit(){
    console.warn(this.loginForm.value);
  }
}
