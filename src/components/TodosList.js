import React from "react";
import "./../styles/App.css";

export default function TodosList(props) {
  let todosList = [...new Set(props.todoList)];
  let updateTodosList = props.updateTodoList;
  const [editTodoInput, updateEditTodo] = React.useState("");
  const changeEditTodoState = (event) => {
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
          <>
            <li key={index.toString()} className="list">
              {e}
            </li>
            <textarea
              className={("editTask", index)}
              style={{ display: "none" }}
              onChange={() => changeEditTodoState(event)}
              value={editTodoInput}
              key={`inp${index}`}
              type="text"
              placeholder="Edit here..."
            />
            <br />
            <button
              className={("saveTask", index)}
              onClick={() => saveEditTodo(event)}
              style={{ display: "none" }}
              disabled={!editTodoInput}
              key={`save${index}`}
            >
              save
            </button>
            <br />
            <button
              className={("edit", index)}
              key={`edit${index}`}
              onClick={() => editTodo(event)}
            >
              Edit
            </button>
            <br />
            <button
              key={`delete${index}`}
              className={("delete", index)}
              onClick={() => deleteTodo(event)}
            >
              Delete
            </button>
            <br />
          </>
        );
      })}
    </>
  );
}
