import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-testfor',
  templateUrl: './testfor.component.html',
  styleUrls: ['./testfor.component.css']
})
export class TestforComponent implements OnInit {
  employees = [
    { id: 1001, name: 'john', age: 24 },
    { id: 1002, name: 'jill', age: 35 },
    { id: 1003, name: 'peter', age: 25 },
    { id: 1004, name: 'anna', age: 45 }
  ];

  constructor() { }

  ngOnInit(): void {
  }

  getColor(age) {
    if (age >= 40) {
      return "red";
    }
    else if (age >= 30) {
      return "yellow";
    }
    else if (age >= 20) {
      return "green";
    }
  }
}
