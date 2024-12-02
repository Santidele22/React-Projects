import { TaskID, Task as TaskModel } from "../models/task.model";

interface Props extends TaskModel {
	setCompleted: (id: string, Status: boolean) => void;
	removeTodo: ({ id }: TaskID) => void;
}
export function Task({ id, Name, Status, removeTodo, setCompleted }: Props) {
	return (
		<>
			<div className="view">
				<input
					className="toggle"
					checked={Status}
					type="checkbox"
					onChange={(e) => {
						setCompleted(id, e.target.checked);
					}}
				/>
				<label>{Name}</label>
				<button
					className="destroy"
					onClick={() => {
						removeTodo({ id });
					}}
				></button>
			</div>
			<input className="edit" />
		</>
	);
}
