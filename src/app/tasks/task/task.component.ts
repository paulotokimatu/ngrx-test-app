import { Component, OnInit, Input } from '@angular/core';
import { Store } from '@ngrx/store';

import Task from './task.model';
import * as TodoAction from '../../store/tasks/tasks.action';
import { TasksState } from '../../store/tasks/tasks.state';

@Component({
  selector: 'todo-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent implements OnInit {
  @Input()
  task: Task;

  @Input()
  index: number;

  constructor(private store: Store<TasksState>) { }

  ngOnInit() {
  }

  completeTask(i) {
    this.store.dispatch(new TodoAction.CompleteTask(i));
  }

  removeTask(i) {
    this.store.dispatch(new TodoAction.RemoveTask(i));
  }
}
