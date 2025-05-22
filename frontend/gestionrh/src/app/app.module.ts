import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardAdminComponent } from './dashboard-admin/dashboard-admin.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {HTTP_INTERCEPTORS, HttpClientModule, provideHttpClient, withFetch} from "@angular/common/http";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";




@NgModule({
  declarations: [
    AppComponent,
    DashboardAdminComponent,


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
  ],
  providers: [

   
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
