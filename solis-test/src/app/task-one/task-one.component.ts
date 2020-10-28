import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-task-one',
  templateUrl: './task-one.component.html',
  styleUrls: ['./task-one.component.css']
})
export class TaskOneComponent implements OnInit {
  checkbox_one: boolean = false;
  constructor() { }

  ngOnInit() {
  }
  OncheckBox() {
    this.checkbox_one = !this.checkbox_one;
  }
}
