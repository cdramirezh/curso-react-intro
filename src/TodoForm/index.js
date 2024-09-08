import { useContext } from "react";
import { TodoContext } from "../TodoContext";
import './TodoForm.css'

export const TodoForm = () => {
	const { closeModal } = useContext(TodoContext);
	return (
		<div className="todo__form modal-content">
			<div className="modal-header">
				<h1 className="d-block w-100 text-center modal-title fs-5">Añade un ToDo</h1>
				<button
					type="button"
					className="btn-close"
					aria-label="Close"
					onClick={closeModal}
				></button>
			</div>
			<div className="modal-body">
				<input type="text" className="form-control" />
			</div>
			<div className="modal-footer justify-content-between">
				<button type="button" className="btn btn-secondary" onClick={closeModal}>
					Close
				</button>
				<button type="button" className="btn btn-primary">
					Añadir Todo
				</button>
			</div>
		</div>
	);
};
