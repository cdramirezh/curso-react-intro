import { useContext } from "react";
import { TodoContext } from "../TodoContext";

export const CreateTodoButton = () => {
	const { setIsModalOpen } = useContext(TodoContext);

	const openModal = () => {
		setIsModalOpen(true);
	};

	return (
		<div className="text-center">
			<button className="btn btn-primary" onClick={openModal}>
				Crear ToDo
			</button>
		</div>
	);
};
