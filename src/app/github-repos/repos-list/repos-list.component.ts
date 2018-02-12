import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';

import * as GithubReposReducer from '../../store/github-repos/github-repos.reducer';

@Component({
  selector: 'github-repos-list',
  templateUrl: './repos-list.component.html',
  styleUrls: ['./repos-list.component.css']
})
export class ReposListComponent implements OnInit {
  repos$: Observable<any>;

  constructor(private store: Store<any>) {
    this.repos$ = store.select(GithubReposReducer.getRepos);
  }

  ngOnInit() {
  }
}
