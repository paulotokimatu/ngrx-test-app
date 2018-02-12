import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';

import * as GithubReposAction from '../store/github-repos/github-repos.action';

@Component({
  selector: 'app-github-repos',
  templateUrl: './github-repos.component.html',
  styleUrls: ['./github-repos.component.css']
})
export class GithubReposComponent implements OnInit {
  githubUser: string;

  constructor(private store: Store<any>) { }

  ngOnInit() {
  }

  fetchReposData() {
    this.store.dispatch(new GithubReposAction.LoadRepos(this.githubUser));
  }
}
