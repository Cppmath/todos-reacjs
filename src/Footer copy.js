
function Footer({ todos, state, setState}) {
	// const clearCompleted = () => {
	// 	todos = todos.filter(todo => todo.completed === false)
    //     if(todos[0]){
    //         state.todos.forEach((todo,index) => todo.id = index)
    //     }
	// 	setState(pre => ({
	// 		...pre,
	// 		todos: todos
	// 	}))
	// }
	const clearElement = todos.filter(state.filters.completed).length > 0 && 
		`<button onClick ={clearCompleted} class="clear-completed">Clear completed</button>`}

  return (
    <footer className="footer">
		<span className="todo-count"><strong>{todos.filter(state.filters.active).length}</strong> item left</span>
		<ul className="filters">
			<li>
				<a className="selected" href="#/">All</a>
			</li>
			<li>
				<a href="#/active">Active</a>
			</li>
			<li>
				<a href="#/completed">Completed</a>
			</li>
		</ul>
		{/* <button className="clear-completed">Clear completed</button> */}
		{clearElement}
	</footer>
  );
  };

export default Footer;