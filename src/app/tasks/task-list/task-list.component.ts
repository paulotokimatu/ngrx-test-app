import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'todo-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent implements OnInit {
  tasks: any;

  constructor() { }

  ngOnInit() {
  }

  completeTask(i) {
  }

  removeTask(i) {
  }

}
