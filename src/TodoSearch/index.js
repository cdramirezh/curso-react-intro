import { useContext } from "react";
import { TodoContext } from "../TodoContext";

export const TodoSearch = () => {
	const { searchValue, setSearchValue } = useContext(TodoContext);

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
