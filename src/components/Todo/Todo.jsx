import React from "react";
import style from "./todo.css"
import DeleteIcon from "../icons/DeleteIcon/DeleteIcon";
import EditIcon from "../icons/EditIcon/EditIcon";

export default function Todo(props) {
 
  const date = new Date().toLocaleTimeString();

  return(
    <div className="todo">
      <div className="todo-info">
        <p className="todo-info-title">{props.name}</p>
        <span className="todo-date">{props.date} {props.time}</span>
      </div>
      <div className="todo-info-icons">
        <div>
          <EditIcon/>
        </div>
        <div onClick={()=>props.deleteTodo(props.id)}>
          <DeleteIcon/>  
        </div>
      </div>
    </div>
  )
}