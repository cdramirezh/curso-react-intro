import { useState } from "react";
import { useStateLocalStorage } from "./useLocalStorage";
import { AppUI } from "./AppUI";

function App() {
	const [searchValue, setSearchValue] = useState("");
	const [todos, saveTodos] = useStateLocalStorage("TODOS_V1", []);

	const completedTodos = todos.reduce((acc, task) => (task.completed ? acc + 1 : acc), 0);
	const totalTodos = todos.length;

	const searchedTodos = todos.filter(todo =>
		todo.text.toLowerCase().includes(searchValue.toLowerCase())
	);

	const completeTodo = id => {
		const completedTodoIndex = todos.findIndex(todo => todo.id === id);
		const newTodos = [...todos];
		newTodos[completedTodoIndex].completed = true;
		saveTodos(newTodos);
	};

	const deleteTodo = id => {
		const deletedTodoIndex = todos.findIndex(todo => todo.id === id);
		const newTodos = [...todos];
		newTodos.splice(deletedTodoIndex, 1);
		saveTodos(newTodos);
	};

	return (
		<AppUI
			completeTodo={completeTodo}
			completedTodos={completedTodos}
			deleteTodo={deleteTodo}
			saveTodos={saveTodos}
			searchedTodos={searchedTodos}
			searchValue={searchValue}
			setSearchValue={setSearchValue}
			totalTodos={totalTodos}
		/>
	);
}

export default App;
