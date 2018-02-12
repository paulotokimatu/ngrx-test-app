import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';

import * as TodoAction from '../../store/tasks/tasks.action';
import { TasksState } from '../../store/tasks/tasks.state';

@Component({
  selector: 'todo-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css']
})
export class CockpitComponent implements OnInit {
  taskInput = '';

  constructor(private store: Store<TasksState>) { }

  ngOnInit() {
  }

  addTask() {
    this.store.dispatch(new TodoAction.AddTask(this.taskInput));
    this.taskInput = '';
  }
}
