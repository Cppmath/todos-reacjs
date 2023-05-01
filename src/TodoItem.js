
function TodoItem({ todo, todos, state, setState }) {
	// handle toggle
	const toggle = () => {
		todos[todo.id].completed = !todo.completed
		setState(pre => ({
			...pre,
			todos: todos
		}))
	}
	//class cho input
	const classlist = `${todo.completed && "completed" || ""} ${state.editIndex === todo.id && 'editing'}`
	// handle startEdit
	const startEdit = () => {
		setState(pre => ({
			...pre,
			editIndex: todo.id
		}))
	}
	// handle cancleEdit 
	const cancleEdit = () => {
		setState(pre => ({
			...pre,
			editIndex: null
		}))
	}
	// handle endEdit
	const endEdit = (e) => { 
		if(e.target.value.trim()){
			todos[todo.id].title = e.target.value.trim()
		} else {
			destroy()
		}
		setState(pre => ({
			...pre,
			todos: todos,
			editIndex: null
		}))
	}
	// handle destroy
	const destroy = () => {
		todos.splice(todo.id,1)
        if(todos[0]){
            todos.forEach((todo,index) => todo.id = index)
        }
		setState(pre => ({
			...pre,
			todos: todos,
		}))
	}
	
  return (
    <li className={classlist}>
		<div className="view">
			<input className="toggle" type="checkbox" checked = {todo.completed} onClick = {toggle}/>
			<label onDoubleClick = {startEdit}> {todo.title} </label>
			<button className="destroy" onClick={destroy}></button>
		</div>
		<input className="edit" defaultValue= {todo.title}
				onKeyUp={(e) => {e.keyCode === 13 && endEdit(e) || e.keyCode === 27 && cancleEdit()}}
				onBlur={endEdit}
		/>
	</li>
  );
}

export default TodoItem;
