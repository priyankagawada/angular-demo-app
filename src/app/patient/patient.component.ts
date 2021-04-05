import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-patient',
  templateUrl: './patient.component.html',
  styleUrls: ['./patient.component.css']
})
export class PatientComponent implements OnInit {

  enableButton: boolean = true;

  patientList: any[] = [
    { patientId: 1001, patientName: 'John', photo: 'assets/images/patient1.jpg', age: 29, status: true },
    { patientId: 1002, patientName: 'Jill', photo: 'assets/images/patient2.jpg', age: 30, status: true },
    { patientId: 1003, patientName: 'Peter', photo: 'assets/images/patient3.jpg', age: 32, status: true },
    { patientId: 1004, patientName: 'Anna', photo: 'assets/images/patient4.jpg', age: 67, status: false }
  ]

  constructor() {
    console.log('Patient Component instantiated...');
    console.log(`Patient ID - ${this.patientList[0].patientId}  Patient Name - ${this.patientList[0].patientName}`);

    // invoke asyn function in javascript -setTimeout()
    // ES5 function(){} - anonymous function
    // ES6  () => {}
    setTimeout(() => {
      this.enableButton = false;
    }, 7000)

  }

  ngOnInit() {
    console.log('Patient Component - ngOnInit called');
  }

  // Event handler will be called when an event is raised on UI
  // function inside a component class will allow to write presentation logics for dynamic behavior
  public updatePhoto(): void {
    this.patientList[0].photo = "assets/images/bear.jpg"
  }

}
