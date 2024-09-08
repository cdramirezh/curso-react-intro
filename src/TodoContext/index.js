import { createContext, useState } from "react";
import { useStateLocalStorage } from "./useLocalStorage";

export const TodoContext = createContext();

export const TodoProvider = ({ children }) => {
	const [searchValue, setSearchValue] = useState("");
	const {
		items: todos,
		saveItem: saveTodos,
		loading,
		error,
	} = useStateLocalStorage("TODOS_V1", []);

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
		<TodoContext.Provider
			value={{
				completeTodo,
				completedTodos,
				deleteTodo,
				error,
				loading,
				saveTodos,
				searchedTodos,
				searchValue,
				setSearchValue,
				totalTodos,
			}}
		>
			{children}
		</TodoContext.Provider>
	);
};

export const TodoConsumer = ({ children }) => {
	<TodoContext.Consumer>{children}</TodoContext.Consumer>;
};
