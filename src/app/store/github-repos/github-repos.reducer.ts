import * as GithubReposAction from './github-repos.action';
import { GithubReposState } from './github-repos.state';
import { createFeatureSelector, createSelector } from '@ngrx/store';

export type Action = GithubReposAction.All;

const defaultState: GithubReposState = {
  user: 'LinioIT',
  repos: [],
};

export function githubReposReducer(state = defaultState, action: Action): GithubReposState {
  switch (action.type) {
    case GithubReposAction.UPDATE_REPOS: {
      return { ...state, repos: action.payload.repos, user: action.payload.user };
    }
    default:
      return state;
  }
}

export const getGithubReposState = createFeatureSelector<GithubReposState>('githubReposState');

export const getRepos = createSelector(
  getGithubReposState,
  (state: GithubReposState) => state.repos
);
