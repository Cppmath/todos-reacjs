
function Footer({ todos, state, setState}) {
	// handle clearCompleted
	const clearCompleted = () => {
		todos = todos.filter(todo => todo.completed === false)
        if(todos[0]){
            todos.forEach((todo,index) => todos[index].id = index)
        }
		setState(pre => ({
			...pre,
			todos: todos
		}))
	}

	// clearElement
	const clearElement = todos.filter(state.filters.completed).length > 0 && 
		<button onClick ={clearCompleted} className="clear-completed">Clear completed</button>	

	// filterHandle
	const filterHandle = (type) => {
		setState(pre => ({
			...pre,
			filter: type
		}))
	}

	// filterElement
	const filterElement = Object.keys(state.filters).map((type, key) =>
			<li key = {key}>
				<a onClick = {() => {filterHandle(type)}} className={state.filter === type && "selected" || ""} href="#">
					{type[0].toUpperCase() + type.slice(1)}
				</a>
			</li>
	)

  return (
    <footer className="footer">
		<span className="todo-count"><strong>{todos.filter(state.filters.active).length}</strong> item left</span>
		<ul className="filters">
			{filterElement}
		</ul>
		{clearElement}
	</footer>
  	);
  };

export default Footer;
