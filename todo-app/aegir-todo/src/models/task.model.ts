export interface Task {
	id: string;
	Name: string;
	completed: boolean;
}

export type TaskID = Pick<Task, "id">;
export type TaskName = Pick<Task, "Name">;
export type TaskStatus = Pick<Task, "completed">;

export type TaskIdStatus = Pick<Task, "id" | "completed">;
