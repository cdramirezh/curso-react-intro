import "./TodoItem.css";

export const TodoItem = props => {
	return (
		<li className={`list-group-item todo__item ${props.completed ? "todo__item--active" : ""}`}>
			<button type="button" className="todo__check" title="Check">
				<i className="bi bi-check-lg"></i>
			</button>
			<span>Llorar con la Llorona</span>
			<button type="button" className="btn-close" title="Delete"></button>
		</li>
	);
};
