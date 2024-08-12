import "./TodoItem.css";

export const TodoItem = () => {
	return (
		<li className="list-group-item todo__item">
			<button type="button" className="todo__check">
				<i className="bi bi-check-lg"></i>
			</button>
			<span>Llorar con la Llorona</span>
			<button type="button" className="btn-close" aria-label="Close"></button>
		</li>
	);
};
