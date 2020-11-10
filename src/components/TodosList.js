import React from "react";
import "./../styles/App.css";

export default function TodosList(props) {
  let todosList = [...new Set(props.todoList)];
  let updateTodosList = props.updateTodoList;
  const [editTodoInput, updateEditTodo] = React.useState("");
  const changeEditTodoState = (event) => {
    let svEle = document.getElementsByClassName(event.target.className)[1];
    updateEditTodo(event.target.value);
  };
  const editTodo = (event) => {
    let inputEle = document.getElementsByClassName(event.target.className)[0];
    let saveEle = document.getElementsByClassName(event.target.className)[1];
    inputEle.style.display = "block";
    saveEle.style.display = "block";
    event.target.style["display"] = "none";
  };
  const deleteTodo = (event) => {
    let target = event.target;
    let unique = todosList;
    unique = unique.filter((e, index) => {
      return index.toString() !== target.className;
    });
    updateTodosList(unique);
  };
  const saveEditTodo = (event) => {
    let index = parseInt(event.target.className);
    let unique = todosList;
    unique[index] = editTodoInput;
    console.log(unique[index]);
    let inputEle = document.getElementsByClassName(event.target.className)[0];
    let saveEle = document.getElementsByClassName(event.target.className)[1];
    let editEle = document.getElementsByClassName(event.target.className)[2];
    inputEle.style.display = "none";
    saveEle.style.display = "none";
    editEle.style.display = "block";
    updateTodosList(unique);
    updateEditTodo("");
  };

  return (
    <>
      {todosList.map((e, index) => {
        return (
          <li key={index.toString()} className="list">
            {e}
            <textarea
              className={("editTask", index)}
              style={{ display: "none" }}
              onChange={() => changeEditTodoState(event)}
              value={editTodoInput}
              key={`inp${e}`}
              type="text"
              placeholder="Edit here..."
            />
            <button
              className={("saveTask", index)}
              onClick={saveEditTodo}
              style={{ display: "none" }}
              disabled={!editTodoInput}
              key={`save${e}`}
            >
              save
            </button>
            <button
              className={("edit", index)}
              key={`edit${index}`}
              onClick={() => editTodo(event)}
            >
              Edit
            </button>
            <button
              key={`delete${index}`}
              className={("delete", index)}
              onClick={() => deleteTodo(event)}
            >
              Delete
            </button>
          </li>
        );
      })}
    </>
  );
}
