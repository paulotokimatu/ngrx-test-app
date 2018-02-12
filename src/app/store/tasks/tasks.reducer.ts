import Task from '../../tasks/task/task.model';
import { TasksState } from './tasks.state';
import * as TasksActions from './tasks.action';
import { createFeatureSelector, createSelector } from '@ngrx/store';

export type Action = TasksActions.All;

const defaultState: TasksState = {
  tasks: [
    {
      title: 'foobar1',
      createdAt: new Date(),
      status: 'pending'
    },
    {
      title: 'foobar2',
      createdAt: new Date('2018/01/01'),
      status: 'done'
    },
    {
      title: 'foobar3',
      createdAt: new Date('2018/01/10'),
      status: 'pending'
    }
  ],
};

export function tasksReducer(state = defaultState, action: Action): TasksState {
  switch (action.type) {
    case TasksActions.CHANGE_TASKS: {
      const test = { ...state };
      test.tasks[0].title = action.payload;
      return { ...test };
    }
    case TasksActions.GET_TASKS: {
      return { ...state };
    }
    case TasksActions.ADD_TASK: {
      const stateCopy = { ...state };
      stateCopy.tasks.push(Task.generateNewTask(action.payload));
      return { ...stateCopy };
    }
    case TasksActions.COMPLETE_TASK: {
      const stateCopy = { ...state };
      stateCopy.tasks[action.payload].status = 'done';
      return { ...stateCopy };
    }
    case TasksActions.REMOVE_TASK: {
      const stateCopy = { ...state };
      stateCopy.tasks.splice(action.payload, 1);
      return { ...stateCopy };
    }
    default:
      return state;
  }
}

export const getTasksState = createFeatureSelector<TasksState>('taskState');

export const getTasks = createSelector(
  getTasksState,
  (state: TasksState) => state.tasks
);

export const getPendingNumber = createSelector(
  getTasksState,
  (state: TasksState) => state.tasks.reduce((total, task) => {
    if (task.status === 'pending') {
      return total + 1;
    }
    return total;
  }, 0)
);
