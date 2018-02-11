import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'todo-summary',
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.css']
})
export class SummaryComponent implements OnInit {
  pendingTasks: number = 0;

  constructor() { }

  ngOnInit() {
  }

}
