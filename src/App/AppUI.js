import { CreateTodoButton } from "../CreateTodoButton";
import { TodoCounter } from "../TodoCounter";
import { EmptyTodos } from "../EmptyTodos";
import { TodoError } from "../TodoError";
import { TodoItem } from "../TodoItem";
import { TodoList } from "../TodoList";
import { TodoLoading } from "../TodoLoading";
import { TodoSearch } from "../TodoSearch";
import "./App.css";

export const AppUI = ({
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
}) => (
	<div className="container todo__app">
		<TodoCounter completed={completedTodos} total={totalTodos} />
		<CreateTodoButton setTodos={saveTodos} />
		<TodoSearch searchValue={searchValue} setSearchValue={setSearchValue} />
		<TodoList>
			{loading && <TodoLoading />}
			{!loading && error && <TodoError />}
			{!loading && searchedTodos.length === 0 && <EmptyTodos />}
			{!loading &&
				!!searchedTodos.length &&
				searchedTodos.map(({ text, completed, id }, i) => (
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
