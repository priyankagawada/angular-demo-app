import { Component } from '@angular/core';

// Java - annotation
// NET - razor
// Typescript - decorator 
@Component({
  selector: 'app-root', // component tag
  templateUrl: './app.component.html', // view 
  //styleUrls: ['./app.component.css']
  styles:[`
   h1 {
      color: dodgerblue; 
   }
  `]
})
export class AppComponent {
  // properties or model
  title = 'Welcome to App Component'; // model
  color:string='red';
  // to initialize the properties of class
   constructor(){
     console.log('App Component Instantiated..')
   }

}

// Angular - xxxxx = new AppComponent()
