import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HelpComponent } from '../help/help.component';
import { AboutComponent } from '../about/about.component';
import { ContactComponent } from '../contact/contact.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    HelpComponent,
    AboutComponent,
    ContactComponent 
  ],
  imports: [
    CommonModule,
    FormsModule
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
