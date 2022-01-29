import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  templateUrl: './veiculos.component.html',
  styleUrls: ['./veiculos.component.css']
})
export class VeiculosComponent implements OnInit {

  constructor(public route: Router ) { }

  verifica(rota:any){
    return this.route.url === rota
  }
  ngOnInit(): void {
  }

}
