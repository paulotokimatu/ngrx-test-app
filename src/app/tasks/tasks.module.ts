import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { TaskComponent } from './task/task.component';
import { TaskListComponent } from './task-list/task-list.component';
import { SummaryComponent } from './summary/summary.component';
import { CockpitComponent } from './cockpit/cockpit.component';
import { TasksComponent } from './tasks.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  declarations: [
    TasksComponent,
    TaskComponent,
    TaskListComponent,
    SummaryComponent,
    CockpitComponent,
  ],
  exports: [
    TasksComponent
  ]
})
export class TasksModule { }
