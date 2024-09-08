import { useContext } from "react";
import { TodoContext } from "../TodoContext";
import "./TodoCounter.css";

export const TodoCounter = () => {
	const { completedTodos: completed, loading, totalTodos: total } = useContext(TodoContext);
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
