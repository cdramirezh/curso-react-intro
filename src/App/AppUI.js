import { CreateTodoButton } from "../CreateTodoButton";
import { TodoCounter } from "../TodoCounter";
import { TodoItem } from "../TodoItem";
import { TodoList } from "../TodoList";
import { TodoSearch } from "../TodoSearch";
import "./App.css";

export const AppUI = ({
	completeTodo,
	completedTodos,
	deleteTodo,
	saveTodos,
	searchedTodos,
	searchValue,
	setSearchValue,
	totalTodos,
}) => (
	<div className="container todo__app">
		<TodoCounter completed={completedTodos} total={totalTodos} />
		<CreateTodoButton setTodos={saveTodos} />
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
	</div>
);
