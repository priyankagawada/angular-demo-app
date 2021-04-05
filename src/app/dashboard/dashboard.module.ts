import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HelpComponent } from '../help/help.component';

@NgModule({
  declarations: [
    HelpComponent 
  ],
  imports: [
    CommonModule
  ],
  exports:[
    HelpComponent
  ]
})
export class DashboardModule { 

  constructor()
  {
    console.log('DashBoard  Module Loaded')
  }
}
