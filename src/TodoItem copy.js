
function TodoItem({ todo, todos, state, setState }) {
	// handle toggle
	const toggle = () => {
		todos[todo.id].completed = !todo.completed
		setState({
			todos: todos,
			filter: 'all',
			filters: {
				all: () => true,
				active: todo => !todo.completed,
				completed: todo => todo.completed
			},
			editIndex: null
		})
	}
	//class cho input
	const classlist = `${todo.completed && "completed" || ""} ${state.editIndex === todo.id && 'editing'}`
	// handle startEdit
	const startEdit = () => {
		setState({
			todos: todos,
			filter: 'all',
			filters: {
				all: () => true,
				active: todo => !todo.completed,
				completed: todo => todo.completed
			},
			editIndex: todo.id
		})
	}
	// handle cancleEdit 
	const cancleEdit = () => {
		setState({
			todos: todos,
			filter: 'all',
			filters: {
				all: () => true,
				active: todo => !todo.completed,
				completed: todo => todo.completed
			},
			editIndex: null
		})
	}
	// handle endEdit
	const endEdit = (e) => { 
		if(e.target.value.trim()){
			todos[todo.id].title = e.target.value.trim()
		}
		setState({
			todos: todos,
			filter: 'all',
			filters: {
				all: () => true,
				active: todo => !todo.completed,
				completed: todo => todo.completed
			},
			editIndex: null
		})
		console.log('dang edit')
	}
	// handle destroy
	const destroy = () => {
		todos.splice(todo.id,1)
        if(todos[0]){
            todos.forEach((todo,index) => todo.id = index)
        }
		setState({
			todos: todos,
			filter: 'all',
			filters: {
				all: () => true,
				active: todo => !todo.completed,
				completed: todo => todo.completed
			},
			editIndex: null
		})
	}
	
	console.log(todos[todo.id].title)
  return (
    <li className={classlist}>
		<div className="view">
			<input className="toggle" type="checkbox" checked = {todo.completed} onClick = {toggle}/>
			<label onDoubleClick = {startEdit}> {todo.title} </label>
			<button className="destroy" onClick={destroy}></button>
		</div>
		<input className="edit" value = {todo.title}
				onKeyUp={(e) => {e.keyCode === 13 && endEdit(e) || e.keyCode === 27 && cancleEdit()}}
				onBlur={endEdit}
		/>
	</li>
  );
}

export default TodoItem;
