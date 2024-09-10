import { useContext, useEffect, useRef } from "react";
import { TodoContext } from "../TodoContext";
import "./TodoForm.css";

export const TodoForm = () => {
	const { closeModal, addTodo } = useContext(TodoContext);
	const inputRef = useRef();

	const handleSubmit = event => {
		event.preventDefault();
		const newTodoText = event.target.newTodo.value;
		addTodo({ text: newTodoText, completed: false });
		closeModal();
	};

	useEffect(() => {
		if (inputRef.current) {
			inputRef.current.focus();
		}
	}, []);

	return (
		<div className="todo__form modal-content">
			<form onSubmit={handleSubmit}>
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
					<input
						type="text"
						className="form-control"
						placeholder="Acá va el texto de tu ToDo"
						name="newTodo"
						required
						ref={inputRef}
					/>
				</div>
				<div className="modal-footer justify-content-between">
					<button type="button" className="btn btn-secondary" onClick={closeModal}>
						Close
					</button>
					<button type="submit" className="btn btn-primary">
						Añadir ToDo
					</button>
				</div>
			</form>
		</div>
	);
};
