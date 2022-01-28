import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RetiradosComponent } from './veiculos/retirados/retirados.component';
import { VeiculosComponent } from './veiculos/veiculos.component';

const routes: Routes = [
  {path: 'login', component: LoginComponent},
  {path: 'veiculos', component: VeiculosComponent, children: [{path:'retirados', component: RetiradosComponent}]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
