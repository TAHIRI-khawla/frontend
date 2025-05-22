import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './layout/layout.component';
import {DashboardAdminComponent} from "./dashboard-admin/dashboard-admin.component";
import {DashboardUserComponent} from "./dashboard-user/dashboard-user.component";


const routes: Routes = [
  { path: '', redirectTo: 'dashbord-responsable', pathMatch: 'full' },
  {path:'dashbord-responsable',component:DashboardAdminComponent},
  {path:'dashbord-employee',component:DashboardUserComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
