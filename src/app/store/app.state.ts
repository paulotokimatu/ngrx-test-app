import { TasksState } from './tasks/tasks.state';
import { GithubReposState } from './github-repos/github-repos.state';

// The App consists of two diferent type of datas: Tasks and Github-Repos
export interface AppState {
  taskState: TasksState;
  githubReposState: GithubReposState;
}
