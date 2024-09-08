import { useEffect, useState } from "react";

const delay = 1500;

const getItems = key =>
	new Promise(resolve => {
		setTimeout(() => {
			resolve(JSON.parse(localStorage.getItem(key)));
		}, delay);
	});

const postItems = (key, newItem) =>
	new Promise(resolve => {
		setTimeout(() => {
			localStorage.setItem(key, JSON.stringify(newItem));
			resolve(true);
		}, delay);
	});

export const useStateLocalStorage = (itemKey, initialValue) => {
	const [items, setItems] = useState(initialValue);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(false);

	useEffect(() => {
		getItems(itemKey)
			.then(setItems)
			.catch(setError)
			.finally(() => setLoading(false));
	}, [loading, itemKey]);

	const saveItem = async newItem => {
		postItems(itemKey, newItem);
		setItems(newItem);
	};

	return { items, saveItem, loading, error };
};
