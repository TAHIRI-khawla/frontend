import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './layout/layout.component';
import {LoginComponent} from "./login/login.component";
import {DashboardAdminComponent} from "./dashboard-admin/dashboard-admin.component";
import {DashboardUserComponent} from "./dashboard-user/dashboard-user.component";
import {EmployeListComponent} from "./Employe/employe-list/employe-list.component";
import {EmployeDetailsComponent} from "./Employe/employe-details/employe-details.component";
import {EmployeCreateComponent} from "./Employe/employe-create/employe-create.component";
import {AuthGuard} from "./guards/auth-guard";
import {EmployeUpdateComponent} from "./Employe/employe-update/employe-update.component";
import {EvaluationComponent} from "./components/evaluation/evaluation.component";
import {CongeFormComponent} from "./Employe/conge-form/conge-form.component";

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: '', redirectTo: 'dashbord-responsable', pathMatch: 'full' },
  {path:'dashbord-responsable',component:DashboardAdminComponent},
  {path:'dashbord-employee',component:DashboardUserComponent},
  {path:'evaluation',component:EvaluationComponent},
  { path: 'demandeconge', component: CongeFormComponent },
  { path: 'employes', component: EmployeListComponent },
  { path: 'employes/:id', component: EmployeDetailsComponent },
  { path: 'create', component: EmployeCreateComponent },
  { path: 'update/:id', component: EmployeUpdateComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
