export interface Task {
	id: string;
	Name: string;
	Status: boolean;
}

export type TaskID = Pick<Task, "id">;
export type TaskName = Pick<Task, "Name">;
export type TaskStatus = Pick<Task, "Status">;

export type TaskIdStatus = Pick<Task, "id" | "Status">;
