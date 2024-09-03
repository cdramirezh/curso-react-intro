export const TodoSearch = ({ searchValue, setSearchValue }) => {
	const handleChange = event => {
		setSearchValue(event.target.value);
	};
	return (
		<input
			className="form-control"
			placeholder="Cortar cebolla"
			value={searchValue}
			onChange={handleChange}
		></input>
	);
};
