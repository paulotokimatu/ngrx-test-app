import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';

import * as TodoReducer from '../../store/tasks/tasks.reducer';

@Component({
  selector: 'todo-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent implements OnInit {
  tasks$: Observable<any>;

  constructor(private store: Store<any>) {
    this.tasks$ = store.select(TodoReducer.getTasks);
  }

  ngOnInit() {
  }
}
