import React, {useRef, useEffect, useState} from "react";
import style from "./todo.css"
import DeleteIcon from "../icons/DeleteIcon/DeleteIcon";
import EditIcon from "../icons/EditIcon/EditIcon";
import AcceptIcon from "../icons/AcceptIcon/AcceptIcon";

export default function Todo(props) {

  const textAreaRef = useRef(null)

  const handleChange = (e) => {
    props.handleTextAreaChange(props.id, e.target.value)
  }
/* 
  const handleKeyDown = (e) => {
    if(e.key === "Enter"){
      props.updateTodo(props.id);
    }
  } */

  const handleFocus = () => {
    setTimeout(() => {
      textAreaRef.current.focus();
    },100)
  }

  useEffect(() => {
    textAreaRef.current.style.height = "auto"
    textAreaRef.current.style.height = (textAreaRef.current.scrollHeight + 2) + "px";
  },[props.name, props.toggleIsUpdating, props.screenSize])
 
  /* const showProps = () => {
    console.log(props.name)
  }
 */

  console.log(props.screenSize.width)

  return(
    <div className="todo">
      <div className={`${props.isUpdating ? 'todo-info-enabled' : 'todo-info'}`}>
        <textarea className={`${props.isUpdating ? 'todo-info-title-enabled' : 'todo-info-title'}`}
          value={props.name}
          disabled={props.isUpdating ? false : true}
          onChange={handleChange}
          /* onKeyDown={handleKeyDown} */
          ref={textAreaRef}
          rows={1}
          onFocus={(e) => e.currentTarget.setSelectionRange(e.currentTarget.value.length, e.currentTarget.value.length)}
        />
        <span className="todo-date">{props.date} {props.time}</span>
        {/* <button onClick={showProps}>show</button> */}
      </div>
      <div className={`${props.isUpdating ? 'todo-info-icons-disabled' : 'todo-info-icons'}`}>
        <div className="todo-info-icon-wrapper" onClick={(e) => {
          props.toggleIsUpdating(props.id)
          handleFocus()}}>
          <EditIcon/>
        </div>
        <div className="todo-info-icon-wrapper" onClick={()=>props.deleteTodo(props.id)}>
          <DeleteIcon/>  
        </div>
      </div>
      <div className={`${props.isUpdating ? 'todo-info-updating' : 'todo-info-updating-disabled'}`}>
        <button onClick={()=>props.updateTodo(props.id)} className="todo-info-update-button">UPDATE</button>
        <div className="todo-info-icon-wrapper accept-wrapper" onClick={()=>props.updateTodo(props.id)}>
          <AcceptIcon/>
        </div>
      </div>
    </div>
  )
}