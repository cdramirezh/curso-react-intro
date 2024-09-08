import { useContext } from "react";
import { CreateTodoButton } from "../CreateTodoButton";
import { Modal } from "../Modal";
import { TodoContext } from "../TodoContext";
import { TodoCounter } from "../TodoCounter";
import { EmptyTodos } from "../EmptyTodos";
import { TodoError } from "../TodoError";
import { TodoForm } from "../TodoForm";
import { TodoItem } from "../TodoItem";
import { TodoItemLoading } from "../TodoItemLoading";
import { TodoList } from "../TodoList";
import { TodoSearch } from "../TodoSearch";
import "./App.css";

export const AppUI = () => {
	const { completeTodo, deleteTodo, error, isModalOpen, loading, searchedTodos, totalTodos } =
		useContext(TodoContext);

	return (
		<div className="container todo__app">
			<TodoCounter />
			<CreateTodoButton />
			<TodoSearch />
			<TodoList>
				{loading &&
					Array(4)
						.fill()
						.map((e, i) => <TodoItemLoading key={i} />)}
				{!loading && error && <TodoError />}
				{!loading && totalTodos === 0 && (
					<div className="alert alert-info" role="alert">
						Crea tu primer ToDo
					</div>
				)}
				{!loading && searchedTodos.length === 0 && totalTodos > 0 && <EmptyTodos />}
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
			{isModalOpen && (
				<Modal>
					<TodoForm />
				</Modal>
			)}
		</div>
	);
};
