import { Action } from '@ngrx/store';

export const LOAD_REPOS = 'LOAD_REPOS';
export const UPDATE_REPOS = 'UPDATE_REPOS';
export const UPDATE_USER = 'UPDATE_USER';

export class LoadRepos implements Action {
  readonly type = LOAD_REPOS;

  constructor(public payload: any) {}
}

export class UpdateRepos implements Action {
  readonly type = UPDATE_REPOS;

  constructor(public payload: any) {}
}

export type All = LoadRepos | UpdateRepos;
