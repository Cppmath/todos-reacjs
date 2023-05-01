import TodoList from "./TodoList";
import Header from "./Header";
import Footer from "./Footer";
import { useState } from "react";
import storage from "./ulti/storage"

function App() {

	const [State, setState] = useState({
		todos: [],
		filter: 'all',
		filters: {
			all: () => true,
			active: todo => !todo.completed,
			completed: todo => todo.completed
		},
		editIndex: null
	})

	storage.set(State.todos)
  return (
    <section className="todoapp">
			<Header todos={State.todos} setState={setState}/>
			<TodoList todos={State.todos} state={State} setState={setState}/>
			{State.todos.length > 0 && <Footer todos={State.todos} state={State} setState={setState} />}
	</section>
  );
}

export default App;
