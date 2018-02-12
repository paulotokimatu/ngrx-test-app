import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';

import * as TodoReducer from '../../store/tasks/tasks.reducer';
import Task from '../task/task.model';
import { TasksState } from '../../store/tasks/tasks.state';

@Component({
  selector: 'todo-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent implements OnInit {
  tasks$: Observable<Task[]>;

  constructor(private store: Store<TasksState>) {
    this.tasks$ = store.select(TodoReducer.getTasks);
  }

  ngOnInit() {
  }
}
