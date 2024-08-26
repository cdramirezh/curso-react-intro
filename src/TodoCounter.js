import "./TodoCounter.css";

export const TodoCounter = ({ completed, total }) => {
	return (
		<h1>
			{completed === total ? "¡Felicitaciones!" : `Completaste ${completed} de ${total} ToDos`}
		</h1>
	);
};
