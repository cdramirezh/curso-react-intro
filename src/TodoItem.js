import { CompleteIcon } from "./CompleteIcon";
import { DeleteIcon } from "./DeleteIcon";
import "./TodoItem.css";

export const TodoItem = ({ completed, text, onComplete, onDelete }) => {
	return (
		<li className={`list-group-item todo__item ${completed ? "todo__item--active" : ""}`}>
			<button type="button" className="todo__check" title="Check" onClick={onComplete}>
				<CompleteIcon />
			</button>
			<span>{text}</span>
			<button type="button" title="Delete" onClick={onDelete}>
				<DeleteIcon />
			</button>
		</li>
	);
};
