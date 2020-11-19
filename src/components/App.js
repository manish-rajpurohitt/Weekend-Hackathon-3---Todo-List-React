import React from "react";
import "./../styles/App.css";
import Todos from "./Todos";

function App() {
	const [todosList,updateTodosList] = React.useState([]);
	const [todo,updateTodo] = React.useState("");
	const todoId = React.useRef(0);
	const handleAdd = ()=>{
	const todosCopy = [...todosList];
    todosCopy.push({ id: todoId.current, text: todo });
    todoId.current = todoId.current + 1;
	updateTodo("");
	updateTodosList(todosCopy);
	}

	const handleDelete = (id)=>{
		let todosCopy = [...todosList]
		todosCopy = todosCopy.filter((el)=>el.id !== id?el:null);
		updateTodosList(todosCopy);

	}

	const saveChangeText = (id,text)=>{
		let todosCopy = [...todosList];
		todosCopy.forEach((el)=>{
			if(id === el.id){
				el.text = text;
			}
		});
		updateTodosList(todosCopy);
	}
	return (
	<div id="main">
	
	<input id="task" type="textarea" onChange={(e)=>updateTodo(e.target.value)} value={todo}/>
	<button id="btn" onClick={()=>handleAdd()} disabled={!todo}>Add</button>
	<ul>
		{todosList.map((todo)=>(
			<Todos key={todo.id} value={todo} saveChangeText={saveChangeText} handleDelete={handleDelete} />
	))}
	</ul>
	</div>
	);
}


export default App;
