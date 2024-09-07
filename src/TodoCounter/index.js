import "./TodoCounter.css";

export const TodoCounter = ({ completed, loading, total }) => {
	return (
		<h1>
			{loading
				? "Cargando ToDos..."
				: completed === total
				? "¡Felicitaciones!"
				: `Completaste ${completed} de ${total} ToDos`}
		</h1>
	);
};
