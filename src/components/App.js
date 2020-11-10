import React from "react";
import "./../styles/App.css";
import TodosList from "./TodosList";

function App() {
	const [todosList,updateTodosList] = React.useState([]);
	const [todo,updateTodo] = React.useState("");

	const handleAdd = ()=>{
		if(todo==="") return;
		let unique = todosList;
		unique.push(todo);
		unique = [...new Set(unique)];
		updateTodosList(unique);
		console.log(todosList)
		updateTodo("");
	}
	const handleChange=(event)=>{
		updateTodo(event.target.value);
	}
	return (
	<div id="main">
	
	<textarea id="task" type="text" onChange={()=>handleChange(event)} value={todo}/>
	<button id="btn" onClick={()=>handleAdd()}>Add</button>
	<ul>
	{todosList.length === 0 ? "":<TodosList key="todolist" todoList={todosList} updateTodoList={updateTodosList}/>}
	</ul>
	</div>
	);
}


export default App;
