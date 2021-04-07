import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-testif',
  templateUrl: './testif.component.html',
  styleUrls: ['./testif.component.css']
})
export class TestifComponent implements OnInit {

  show: boolean = false;
  iconUrl = "assets/images/bear.jpg";

  constructor() { }

  ngOnInit(): void {
  }

  // && , || , ! negate
  updateImageDisplay() {
    this.show = !this.show;
  }
}
