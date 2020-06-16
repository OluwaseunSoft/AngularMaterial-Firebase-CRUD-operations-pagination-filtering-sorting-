import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LoginComponent} from './admin/login/login.component';
import {EmployeesComponent} from './employees/employees.component';


const routes: Routes = [
  {path: '', component: LoginComponent},
  {path: 'employees', component: EmployeesComponent},

  {path: '**', redirectTo: ''}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
