import logo from "./platzi.webp";
import "./App.css";

function App() {
	return (
		<div className="App">
			<TodoCount completed={3} total={5} />
			<TodoItem />
			<TodoItem />
			<TodoItem />
			<header className="App-header">
				<img src={logo} className="App-logo" alt="logo" />
				<p>
					Edita el archivo <code>src/App.js</code> y guarda para recargar.
				</p>
				<a
					className="App-link"
					href="https://platzi.com/reactjs"
					target="_blank"
					rel="noopener noreferrer"
				>
					Aprendamos React
				</a>
			</header>
		</div>
	);
}

function TodoItem() {
	return (
		<li>
			<button>✅</button>
			<p>Llorar con la Llorona</p>
			<button>❌</button>
		</li>
	);
}

const TodoCount = props => (
	<h1>
		Completaste {props.completed} de {props.total} ToDos
	</h1>
);

export default App;
