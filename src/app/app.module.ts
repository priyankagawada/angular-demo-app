import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { DashboardModule } from './dashboard/dashboard.module';

import { AppComponent } from './app.component';
import { PatientComponent } from './patient/patient.component';
import { AppointmentComponent } from './appointment/appointment.component';
import { TestifComponent } from './directives/testif/testif.component';
import { TestforComponent } from './directives/testfor/testfor.component';
import { HighlightDirective } from './directives/highlight.directive';


@NgModule({
  declarations: [
    AppComponent, PatientComponent, 
    AppointmentComponent, TestifComponent, 
    TestforComponent, 
    HighlightDirective
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
