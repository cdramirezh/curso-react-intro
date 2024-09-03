import { useState } from "react";

export const useStateLocalStorage = (itemKey, initialValue) => {
	let parsedItem = JSON.parse(localStorage.getItem(itemKey)) || initialValue;

	const [items, setItems] = useState(parsedItem);

	const saveItem = newItem => {
		localStorage.setItem(itemKey, JSON.stringify(newItem));
		setItems(newItem);
	};

	return [items, saveItem];
};
