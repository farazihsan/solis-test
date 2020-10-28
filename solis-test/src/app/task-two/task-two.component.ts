import { Component, OnInit } from '@angular/core';
import * as Enumerable from 'linq';

@Component({
  selector: 'app-task-two',
  templateUrl: './task-two.component.html',
  styleUrls: ['./task-two.component.css']
})
export class TaskTwoComponent implements OnInit {
    result: { Player: any; distance: number; }[];

  constructor() { }

  data: any;
  passes = [
    {
      result: "incomplete",
      receiver: "Demaryius Thomas",
      distance: 0.7
    },
    {
      result: "complete",
      receiver: "Tim Patrick",
      distance: 0.9
    },
    {
      result: "complete",
      receiver: "Demaryius Thomas",
      distance: 0.3
    },
    {
      result: "incomplete",
      receiver: "Tim Patrick",
      distance: 0.9
    },
    {
      result: "incomplete",
      receiver: "Tim Patrick",
      distance: 0.8
    },
    {
      result: "complete",
      receiver: "Demaryius Thomas",
      distance: 0.1
    },
    {
      result: "interception",
      receiver: "Demaryius Thomas",
      distance: 0.4
    }
  ];
  ngOnInit() {
    let completedData = this.passes.filter(x => x.result == "complete");
    this.data = null;
    for (let obj of completedData) {
      if (!this.data || obj.distance > this.data.distance) {
        this.data = obj;
      }
    }
    this.MostCompletePercentage(this.passes);
  }

  MostCompletePercentage(data: any[]) {
   this.result = Enumerable.from(data)
      .groupBy(function (y) { return y.receiver; })
      .select(function (x) {
        return {
          Player: x.key(),
          distance: x.sum(function (y) { return y.distance })
        };
      })
      .toArray();
  }
  
}
