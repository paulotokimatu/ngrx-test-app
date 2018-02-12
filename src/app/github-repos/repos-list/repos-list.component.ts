import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';

import * as GithubReposReducer from '../../store/github-repos/github-repos.reducer';
import { GithubReposState } from '../../store/github-repos/github-repos.state';

@Component({
  selector: 'github-repos-list',
  templateUrl: './repos-list.component.html',
  styleUrls: ['./repos-list.component.css']
})
export class ReposListComponent implements OnInit {
  repos$: Observable<GithubReposState>;

  constructor(private store: Store<GithubReposState>) {
    this.repos$ = store.select(GithubReposReducer.getRepos);
  }

  ngOnInit() {
  }
}
