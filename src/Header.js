
function Header( { todos, setState} ) {
  
  const nhapData = e => {
    let x = e.target.value.trim()
    e.keyCode === 13 && x !== "" && setState(
      	{
      		todos: [...todos, 
      			{
					id: todos.length,
      				title: x,
      				completed: false
      			}
      		],
      		filter: 'all',
      		filters: {
      			all: () => true,
      			active: todo => !todo.completed,
      			completed: todo => todo.completed
      		},
      		editIndex: null
      	}
      )
  }

  return (
    <header className="header">
		<h1>todos</h1>
		<input className="new-todo" onKeyUp = {nhapData} placeholder="What needs to be done?" autoFocus/>
	</header>
  );
}

export default Header;
