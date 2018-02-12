import { ActionReducerMap } from '@ngrx/store';
import { AppState } from './app.state';
import * as TasksReducer from './tasks/tasks.reducer';
import * as GithubReposReducer from './github-repos/github-repos.reducer';

// The app reducer manages the reducers from both Tasks and Github-Repos modules
export const reducers: ActionReducerMap<AppState> = {
  taskState: TasksReducer.tasksReducer,
  githubReposState: GithubReposReducer.githubReposReducer
};
