import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { GithubReposComponent } from './github-repos.component';
import { ReposListComponent } from './repos-list/repos-list.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
  ],
  declarations: [GithubReposComponent, ReposListComponent],
  exports: [ GithubReposComponent ]
})
export class GithubReposModule { }
