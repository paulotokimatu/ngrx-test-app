import { TasksState } from './tasks/tasks.state';
import { GithubReposState } from './github-repos/github-repos.state';

export interface AppState {
  taskState: TasksState;
  githubReposState: GithubReposState;
}
