import React from "react";
import "./../styles/App.css";
import TodosList from "./TodosList";

function App() {
  const [todosList, updateTodosList] = React.useState([]);
  const [todo, updateTodo] = React.useState("");

  const handleAdd = () => {
    if (todo === "") return;
    let list = todosList;
    list.push(todo);
    list = [...new Set(list)];
    updateTodosList(list);
    updateTodo("");
  };
  const handleChange = (event) => {
    updateTodo(event.target.value);
  };
  return (
    <div id="main">
      <textarea
        id="task"
        type="text"
        onChange={() => handleChange(event)}
        value={todo}
      />
      <button id="btn" onClick={() => handleAdd()}>
        Add
      </button>

      {todosList.length === 0 ? (
        ""
      ) : (
        <TodosList
          key="todolist"
          todoList={todosList}
          updateTodoList={updateTodosList}
        />
      )}
    </div>
  );
}

export default App;
