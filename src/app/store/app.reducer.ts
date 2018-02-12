import { ActionReducerMap } from '@ngrx/store';
import { AppState } from './app.state';
import * as TasksReducer from './tasks/tasks.reducer';

export const reducers: ActionReducerMap<AppState> = {
  taskState: TasksReducer.tasksReducer
};
