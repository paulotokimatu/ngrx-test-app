import { ActionReducerMap } from '@ngrx/store';
import { AppState } from './app.state';
import * as TasksReducer from './tasks/tasks.reducer';
import * as GithubReposReducer from './github-repos/github-repos.reducer';

export const reducers: ActionReducerMap<AppState> = {
  taskState: TasksReducer.tasksReducer,
  githubReposState: GithubReposReducer.githubReposReducer
};
