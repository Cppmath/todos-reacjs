import TodoItem from "./TodoItem";

function TodoList({ todos, state, setState} ) {

	let toggleAll = (completed) => {
		todos.forEach(todo => {
            todo.completed = !completed
        })
		setState(pre => ({
			...pre,
			todos: todos,
		}))
	}
  return (
    <section className="main">
		<input id="toggle-all" className="toggle-all" type="checkbox"
			defaultChecked ={todos.every(state.filters.completed)}
			onChange = {() => toggleAll(todos.every(state.filters.completed))}
		/>
		<label htmlFor="toggle-all">Mark all as complete</label>
		<ul className="todo-list">
			{todos.filter(state.filters[state.filter])
				.map((todo, key) =>
		<TodoItem key={key} todo={todo} todos={todos} state={state} setState={setState}/>) }
		</ul>
	</section>
  );
}

export default TodoList;
