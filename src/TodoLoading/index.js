import "../TodoItem/TodoItem.css";
import "./TodoLoading.css";

const ButtonLoader = () => (
	<div
		className="btn-loader rounded-circle placeholder"
		aria-hidden="true"
		role="presentation"
	></div>
);

export const TodoLoading = () => (
	<ul className="list-group placeholder-glow" aria-hidden="true" role="presentation">
		{Array(4)
			.fill()
			.map((e, i) => (
				<li key={i} className="list-group-item todo__item">
					<ButtonLoader />
					<span className="rounded placeholder col-10" aria-hidden="true" role="presentation">
						&nbsp;
					</span>
					<ButtonLoader />
				</li>
			))}
	</ul>
);
