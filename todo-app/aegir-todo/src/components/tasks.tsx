import { Task } from "./task";
import { TaskID, Task as TaskModel } from "../models/task.model";
interface TaskProps {
	tasks: TaskModel[];
	setCompleted: (id: string, Status: boolean) => void;

	removeTodo: ({ id }: TaskID) => void;
}
export function Tasks({ tasks, setCompleted, removeTodo }: TaskProps) {
	return (
		<ul className="todo-list">
			{tasks.map((task) => (
				<li className={`${task.Status ? "completed" : ""}`} key={task.id}>
					<Task
						Name={task.Name}
						Status={task.Status}
						id={task.id}
						key={task.id}
						setCompleted={setCompleted}
						removeTodo={removeTodo}
					/>
				</li>
			))}
		</ul>
	);
}
