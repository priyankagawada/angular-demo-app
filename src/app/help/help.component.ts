import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-help',
  templateUrl: './help.component.html',
  styleUrls: ['./help.component.css']
})
export class HelpComponent implements OnInit {

  firstname:string = 'john';
  show: boolean = false;

  constructor() {
    console.log('help component instantaited...')
   }

  ngOnInit(): void {
  }

  updateFirstName(event: any)
  {
     // get the value property here
    // console.log(event.value);
    console.log((<HTMLInputElement>event.target).value);
    this.firstname = (<HTMLInputElement>event.target).value

  }

  display(){
    console.log('firstname', this.firstname)
  }
}
