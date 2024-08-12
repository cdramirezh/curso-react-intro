export const TodoSearch = () => {
	const handleChange = event => {
		console.log(event.target.value);
	};
	return (
		<input className="form-control" placeholder="Cortar cebolla" onChange={handleChange}></input>
	);
};
