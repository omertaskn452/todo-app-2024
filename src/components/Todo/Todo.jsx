import React from "react";
import style from "./todo.css"
import DeleteIcon from "../icons/DeleteIcon/DeleteIcon";
import EditIcon from "../icons/EditIcon/EditIcon";

export default function Todo() {
 
  const date = new Date().toLocaleDateString();

  return(
    <div className="todo">
      <div className="todo-info">
        <p className="todo-info-title">Hello World</p>
        <span className="todo-date">{date}</span>
      </div>
      <div className="todo-info-icons">
        <EditIcon/>
        <DeleteIcon/>  
      </div>
    </div>
  )
}