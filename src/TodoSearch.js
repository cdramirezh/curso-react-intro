import { useState } from "react";

export const TodoSearch = () => {
	const [searchValue, setSearchValue] = useState("");
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
