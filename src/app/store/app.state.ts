import { TasksState } from "./tasks/tasks.state";

export interface AppState {
	todoState: TasksState;
}
