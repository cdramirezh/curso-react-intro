import { useState } from "react";
import { CreateTodoButton } from "./CreateTodoButton";
import { TodoCounter } from "./TodoCounter";
import { TodoItem } from "./TodoItem";
import { TodoList } from "./TodoList";
import { TodoSearch } from "./TodoSearch";
import { defaultTodos } from "./defaultTodos";
import "./App.css";

function App() {
	const [searchValue, setSearchValue] = useState("");
	const [todos, setTodos] = useState(defaultTodos);

	const completedTodos = todos.reduce((acc, task) => (task.completed ? acc + 1 : acc), 0);
	const totalTodos = todos.length;

	const searchedTodos = todos.filter(todo =>
		todo.text.toLowerCase().includes(searchValue.toLowerCase())
	);

	const completeTodo = id => {
		const completedTodoIndex = todos.findIndex(todo => todo.id === id);
		const newTodos = [...todos];
		newTodos[completedTodoIndex].completed = true;
		setTodos(newTodos);
	};

	const deleteTodo = id => {
		const deletedTodoIndex = todos.findIndex(todo => todo.id === id);
		const newTodos = [...todos];
		newTodos.splice(deletedTodoIndex, 1);
		setTodos(newTodos);
	};

	return (
		<div className="container todo__app">
			<TodoCounter completed={completedTodos} total={totalTodos} />
			<TodoSearch searchValue={searchValue} setSearchValue={setSearchValue} />
			<TodoList>
				{searchedTodos.map(({ text, completed, id }, i) => (
					<TodoItem
						key={i}
						text={text}
						completed={completed}
						onComplete={() => completeTodo(id)}
						onDelete={() => deleteTodo(id)}
					/>
				))}
			</TodoList>
			<CreateTodoButton setTodos={setTodos} />
		</div>
	);
}

export default App;
