import { TasksState } from './tasks.state'; 
import Task from '../../tasks/task/task.model'; 

import { Action } from '@ngrx/store'; 

export const GET_TASKS = 'GET_TASKS';
export const CHANGE_TASKS = 'CHANGE_TASKS';
export const ADD_TASK = 'ADD_TASK';
export const COMPLETE_TASK = 'COMPLETE_TASK';
export const REMOVE_TASK = 'REMOVE_TASK';

export class GetTasks implements Action {
  readonly type = GET_TASKS;
}

export class ChangeTasks implements Action {
  readonly type = CHANGE_TASKS;

  constructor(public payload: string) {}
}

export class AddTask implements Action {
  readonly type = ADD_TASK;

  constructor(public payload: string) {}
}

export class CompleteTask implements Action {
  readonly type = COMPLETE_TASK;

  constructor(public payload: number) {}
}

export class RemoveTask implements Action {
  readonly type = REMOVE_TASK;

  constructor(public payload: number) {}
}

export type All = GetTasks | ChangeTasks | AddTask | CompleteTask | RemoveTask;
