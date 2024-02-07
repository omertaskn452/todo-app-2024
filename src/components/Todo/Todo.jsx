import React, {useRef, useEffect, useState} from "react";
import style from "./todo.css"
import DeleteIcon from "../icons/DeleteIcon/DeleteIcon";
import EditIcon from "../icons/EditIcon/EditIcon";

export default function Todo(props) {

  const textAreaRef = useRef(null)

  const handleChange = (e) => {
    props.handleTextAreaChange(props.id, e.target.value)
  }

  const handleKeyDown = (e) => {
    if(e.key === "Enter"){
      props.updateTodo(props.id);
    }
  }

  useEffect(() => {
    textAreaRef.current.style.height = "auto"
    textAreaRef.current.style.height = textAreaRef.current.scrollHeight + "px";
  },[props.name])
 
  /* const showProps = () => {
    console.log(props.name)
  }
 */

  return(
    <div className="todo">
      <div className="todo-info">
        <textarea className="todo-info-title"
          value={props.name}
          disabled={props.isUpdating ? false : true}
          onChange={handleChange}
          onKeyDown={handleKeyDown}
          ref={textAreaRef}
          rows="1"
        />
        <span className="todo-date">{props.date} {props.time}</span>
        {/* <button onClick={showProps}>show</button> */}
      </div>
      <div className={`${props.isUpdating ? 'todo-info-icons-disabled' : 'todo-info-icons'}`}>
        <div onClick={()=>props.toggleIsUpdating(props.id)}>
          <EditIcon/>
        </div>
        <div onClick={()=>props.deleteTodo(props.id)}>
          <DeleteIcon/>  
        </div>
      </div>
      <div className={`${props.isUpdating ? 'todo-info-updating' : 'todo-info-updating-disabled'}`}>
        <button onClick={()=>props.updateTodo(props.id)} className="todo-info-update-button">UPDATE</button>
      </div>
    </div>
  )
}