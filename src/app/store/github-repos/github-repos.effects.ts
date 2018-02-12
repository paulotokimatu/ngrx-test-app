import 'rxjs/add/operator/map';
import 'rxjs/add/operator/mergeMap';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Action } from '@ngrx/store';
import { Actions, Effect } from '@ngrx/effects';
import { of } from 'rxjs/observable/of';

import * as GithubReposActions from './github-repos.action';

const baseApiUrl = 'https://api.github.com/users/';
const apiEndpoint = '/repos';

/* NgRx effects can trigger side-effects and also helps structure a component. In this case, this Http request could have been placed in a service, but it is easier
to follow if all actions are centered in the Store.  */
@Injectable()
export class GithubReposEffects {

  constructor(private actions$: Actions, private http: HttpClient) { }

  @Effect()
  loadRepos$: Observable<Action> = this.actions$
    .ofType<GithubReposActions.LoadRepos>(GithubReposActions.LOAD_REPOS)
    .mergeMap(action =>
      this.http.get(baseApiUrl + action.payload + apiEndpoint)
        .map((data) => {
          return new GithubReposActions.UpdateRepos({user: action.payload, repos: data});
        })
    );
}
