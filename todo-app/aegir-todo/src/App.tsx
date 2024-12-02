import { useState } from "react";
import { Header } from "./components/header";
import { Tasks } from "./components/tasks";
import { task as taskMock } from "./mockups/task";
import { TaskID } from "./models/task.model";
import { Footer } from "./components/footer";
function App() {
	const [tasks, setTask] = useState(taskMock);
	function setCompleted(id: string, Status: boolean) {
		const newTasks = tasks.map((task) => {
			if (task.id === id) {
				return { ...task, Status };
			}
			return task;
		});
		setTask(newTasks);
	}
	function deleteTask({ id }: TaskID) {
		const taskDeleted = tasks.filter((task) => task.id !== id);
		setTask(taskDeleted);
	}
	return (
		<>
			<main className="todoapp">
				<Header />
				<Tasks
					tasks={tasks}
					removeTodo={deleteTask}
					setCompleted={setCompleted}
				/>
				<Footer />
			</main>
		</>
	);
}

export default App;
