import { useContext } from "react";
import { createPortal } from "react-dom";
import { TodoContext } from "../TodoContext";
import "./Modal.css";

export const Modal = ({ children }) => {
	const { closeModal } = useContext(TodoContext);

	const handleClickBackdrop = event => {
		if (event.target === event.currentTarget) {
			closeModal();
		}
	};

	return createPortal(
		<div
			className="todo__modal modal fade show"
			tabIndex="-1"
			aria-modal="true"
			role="dialog"
			onClick={handleClickBackdrop}
		>
			<div className="modal-dialog modal-dialog-centered">{children}</div>
		</div>,

		document.getElementById("modal")
	);
};
