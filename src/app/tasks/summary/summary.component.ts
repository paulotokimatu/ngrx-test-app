import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';

import * as TasksReducer from '../../store/tasks/tasks.reducer';
import { TasksState } from '../../store/tasks/tasks.state';

@Component({
  selector: 'todo-summary',
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.css']
})
export class SummaryComponent implements OnInit {
  pendingTasks$: Observable<number>;

  constructor(private store: Store<TasksState>) {
    this.pendingTasks$ = store.select(TasksReducer.getPendingNumber);
  }

  ngOnInit() {
  }

}
