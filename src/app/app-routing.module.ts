import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { FormuComponent } from './veiculos/formu/formu.component';
import { RetiradosComponent } from './veiculos/retirados/retirados.component';
import { VeiculosComponent } from './veiculos/veiculos.component';

const routes: Routes = [
  {path: 'login', component: LoginComponent},
  {path: 'veiculos', component: VeiculosComponent, children: [
    {path:'retirados', component: RetiradosComponent},
    {path: 'novo', component: FormuComponent},
    {path: 'editar', component: FormuComponent}]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
