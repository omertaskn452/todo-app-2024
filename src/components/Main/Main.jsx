import React from "react";
import style from "./main.css"
import DeleteIcon from "../icons/DeleteIcon/DeleteIcon";
import EditIcon from "../icons/EditIcon/EditIcon";
import Todo from "../Todo/Todo";

export default function Main() {
  return(
    <div className="main">
      <h1>QU-TODO</h1>
      <div className="main-wrapper">
        <div className="add-todo">
          <input 
            className="submit-input" 
            type="text" 
            name="" 
            id=""
            placeholder="Add new todo" />
          <button className="submit-button">ADD</button>
        </div>
        <div className="todos">
          <Todo/>
          <Todo/>
          <Todo/>
          <Todo/>
        </div>
      </div>
    </div>
  )
}