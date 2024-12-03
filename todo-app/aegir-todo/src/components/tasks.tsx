import { Task } from "./task";
import { TaskID, Task as TaskModel } from "../models/task.model";
interface TaskProps {
	tasks: TaskModel[];
	setCompleted: (id: string, completed: boolean) => void;
	removeTodo: ({ id }: TaskID) => void;
}
export function Tasks({ tasks, setCompleted, removeTodo }: TaskProps) {
	return (
		<ul className="todo-list">
			{tasks.map((task) => (
				<li className={`${task.completed ? "completed" : ""}`} key={task.id}>
					<Task
						Name={task.Name}
						completed={task.completed}
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
