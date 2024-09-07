import "../TodoItem/TodoItem.css";
import "./TodoItemLoading.css";

const TodoButtonLoader = () => (
	<div
		className="btn-loader rounded-circle placeholder"
		aria-hidden="true"
		role="presentation"
	></div>
);

export const TodoItemLoading = () => (
	<li className="list-group-item todo__item placeholder-glow">
		<TodoButtonLoader />
		<span className="rounded placeholder col-10" aria-hidden="true" role="presentation">
			&nbsp;
		</span>
		<TodoButtonLoader />
	</li>
);
