import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-patient',
  templateUrl: './patient.component.html',
  styleUrls: ['./patient.component.css']
})
export class PatientComponent implements OnInit {

  patientList: any[] = [
    { patientId: 1001, patientName: 'John', photo: 'john-image', age: 29, status: true },
    { patientId: 1002, patientName: 'Jill', photo: 'jull-image', age: 30, status: true },
    { patientId: 1003, patientName: 'Peter', photo: 'peter-image', age: 32, status: true },
    { patientId: 1004, patientName: 'Anna', photo: 'anna-image', age: 67, status: false }
]

constructor() {
    console.log('Patient Component instantiated...');
    console.log(`Patient ID - ${this.patientList[0].patientId}  Patient Name - ${this.patientList[0].patientName}`);
}

ngOnInit() {
    console.log('Patient Component - ngOnInit called');
}
 
}
