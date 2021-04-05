import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { DashboardModule } from './dashboard/dashboard.module';

import { AppComponent } from './app.component';
import { PatientComponent } from './patient/patient.component';
import { AppointmentComponent } from './appointment/appointment.component';


@NgModule({
  declarations: [
    AppComponent, PatientComponent, AppointmentComponent
  ],
  imports: [
    BrowserModule,  //child Modules,
    DashboardModule
    ],
  providers: [], // services
  bootstrap: [AppComponent]
})
export class AppModule { 

  constructor(){
    console.log('App Module - Root Module initialized')
  }
}
