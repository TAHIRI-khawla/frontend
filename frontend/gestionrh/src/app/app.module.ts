import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {LayoutComponent} from "./layout/layout.component";
import { LoginComponent } from './login/login.component';
import { DashboardAdminComponent } from './dashboard-admin/dashboard-admin.component';
import { DashboardUserComponent } from './dashboard-user/dashboard-user.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {HTTP_INTERCEPTORS, HttpClientModule, provideHttpClient, withFetch} from "@angular/common/http";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import { EmployeListComponent } from './Employe/employe-list/employe-list.component';
import { EmployeDetailsComponent } from './Employe/employe-details/employe-details.component';
import {RoleNamePipe} from "./pipes/role-name.pipe";
import { EmployeCreateComponent } from './Employe/employe-create/employe-create.component';
import {AuthService} from "./services/auth.service";
import {TokenService} from "./services/token.service";
import {AuthGuard} from "./guards/auth-guard";
import {AuthInterceptor} from "./services/auth-interceptor";
import { EmployeUpdateComponent } from './Employe/employe-update/employe-update.component';
import { EvaluationComponent } from './components/evaluation/evaluation.component';

import { CongeFormComponent } from './Employe/conge-form/conge-form.component';


@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent,
    LoginComponent,
    DashboardAdminComponent,
    DashboardUserComponent,
    EmployeListComponent,
    EmployeDetailsComponent,
    EmployeCreateComponent,
    EmployeUpdateComponent,
    EvaluationComponent,
    CongeFormComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    RoleNamePipe
  ],
  providers: [
    AuthService,
    TokenService,
    AuthGuard,
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true },
    provideHttpClient(withFetch())
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
