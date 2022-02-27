import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { FormEditComponent } from './veiculos/form-edit/form-edit.component';
import { FormSaidaComponent } from './veiculos/form-saida/form-saida.component';
import { FormuComponent } from './veiculos/formu/formu.component';
import { RetiradosComponent } from './veiculos/retirados/retirados.component';
import { VeiculosComponent } from './veiculos/veiculos.component';

const routes: Routes = [
  {path: 'login', component: LoginComponent},
  {path: 'vehicles', component: VeiculosComponent, children: [
    {path:'retirados', component: RetiradosComponent},
    {path: 'new', component: FormuComponent},
    {path: 'edit/:id', component: FormEditComponent},
    {path: 'exit/:id', component: FormSaidaComponent}]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
