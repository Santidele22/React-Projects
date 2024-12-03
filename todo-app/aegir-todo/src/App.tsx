import { useState } from "react";
import { Header } from "./components/header";
import { Tasks } from "./components/tasks";
import { task as taskMock } from "./mockups/task";
import { TaskID, TaskName } from "./models/task.model";
import { Footer } from "./components/footer";
import { FILTERS_VALUE } from "./types/types";
import { FILTERS } from "./consts/consts";
function App() {
	const [tasks, setTask] = useState(taskMock);
	const [filterSelected, setFilterSelected] = useState<FILTERS_VALUE>(
		FILTERS.ALL
	);
	function setCompleted(id: string, completed: boolean) {
		const newTasks = tasks.map((task) => {
			if (task.id === id) {
				return { ...task, completed };
			}
			return task;
		});
		setTask(newTasks);
	}
	function deleteTask({ id }: TaskID) {
		const taskDeleted = tasks.filter((task) => task.id !== id);
		setTask(taskDeleted);
	}
	function handleFilterChange(filter: FILTERS_VALUE) {
		setFilterSelected(filter);
	}

	const activeCount = tasks.filter((task) => !task.completed).length;
	const completeCount = tasks.length - activeCount;

	const filteredTask = tasks.filter((task) => {
		if (filterSelected === FILTERS.ACTIVE) {
			return !task.completed;
		}
		if (filterSelected === FILTERS.COMPLETED) {
			return task.completed;
		}
		return task;
	});
	const onClearComplete = () => {
		const newTask = tasks.filter((task) => !task.completed);
		setTask(newTask);
	};
	const handleAddTask = ({ Name }: TaskName) => {
		const newTodo = {
			id: crypto.randomUUID(),
			Name,
			completed: false,
		};
		const newTodos = [...tasks, newTodo];
		setTask(newTodos);
	};
	return (
		<main className="todoapp">
			<Header saveTask={handleAddTask} />
			<Tasks
				tasks={filteredTask}
				removeTodo={deleteTask}
				setCompleted={setCompleted}
			/>
			<Footer
				activeCount={activeCount}
				completedCount={completeCount}
				onClearCompleted={onClearComplete}
				filterSelected={filterSelected}
				handleFilterChange={handleFilterChange}
			/>
		</main>
	);
}

export default App;
