import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';

import * as GithubReposAction from '../store/github-repos/github-repos.action';
import { GithubReposState } from '../store/github-repos/github-repos.state';

@Component({
  selector: 'app-github-repos',
  templateUrl: './github-repos.component.html',
  styleUrls: ['./github-repos.component.css']
})
export class GithubReposComponent implements OnInit {
  githubUser = 'LinioIT';

  constructor(private store: Store<GithubReposState>) { }

  ngOnInit() {
  }

  fetchReposData() {
    /* This Http request could have been placed in a service, but it is easier to follow if all actions are centered in the Store.  */
    this.store.dispatch(new GithubReposAction.LoadRepos(this.githubUser));
  }
}
