export const CreateTodoButton = () => {
	const handleClic = event => {
		return event.target;
	};
	return (
		<div className="text-center">
			<button className="btn btn-primary" onClick={handleClic}>
				Crear ToDo
			</button>
		</div>
	);
};
