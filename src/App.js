import { CreateTodoButton } from "./CreateTodoButton";
import { TodoCounter } from "./TodoCounter";
import { TodoItem } from "./TodoItem";
import { TodoList } from "./TodoList";
import { TodoSearch } from "./TodoSearch";
import "./App.css";

function App() {
	return (
		<div className="App">
			<TodoCounter completed={3} total={5} />
			<TodoSearch />
			<TodoList>
				{[1, 2, 3].map(i => (
					<TodoItem key={i} />
				))}
			</TodoList>
			<CreateTodoButton />
		</div>
	);
}

export default App;
