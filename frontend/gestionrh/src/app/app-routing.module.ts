import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {DashboardAdminComponent} from "./dashboard-admin/dashboard-admin.component";


const routes: Routes = [
  { path: '', redirectTo: 'dashbord-responsable', pathMatch: 'full' },
  {path:'dashbord-responsable',component:DashboardAdminComponent},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
