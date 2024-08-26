import "./TodoItem.css";

export const TodoItem = ({ completed, text }) => {
	return (
		<li className={`list-group-item todo__item ${completed ? "todo__item--active" : ""}`}>
			<button type="button" className="todo__check" title="Check">
				<i className="bi bi-check-lg"></i>
			</button>
			<span>{text}</span>
			<button type="button" className="btn-close" title="Delete"></button>
		</li>
	);
};
