import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';

// Store-related imports
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { reducers } from './store/app.reducer';
import { GithubReposEffects } from './store/github-repos/github-repos.effects';

import { AppComponent } from './app.component';
import { TasksModule } from './tasks/tasks.module';
import { GithubReposModule } from './github-repos/github-repos.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    TasksModule,
    GithubReposModule,
    StoreModule.forRoot(reducers),
    EffectsModule.forRoot([GithubReposEffects])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
