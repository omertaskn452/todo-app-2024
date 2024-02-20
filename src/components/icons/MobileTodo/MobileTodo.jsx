import React, {useState, useEffect, useRef} from "react";
import style from "./mobileTodo.css"

export default function MobileTodo(props) {

  const textAreaRef = useRef(null)

  const handleChange = (e) => {
    props.handleTextAreaChange(props.id, e.target.value)
  }  

  const handleFocus = (e) => {
    setTimeout(()=>{
      textAreaRef.current.focus();
    },100)
  }

  useEffect(()=>{
    textAreaRef.current.style.height = "auto";
    textAreaRef.current.style.height = textAreaRef.current.scrollHeight + "px";
  },[props.name, props.toggleIsUpdating, props.screenSize])

  return(
    <div className="todo-mobile">
      <div className={`${props.isUpdating ? "todo-mobile-info-enabled" : "todo-mobile-info"}`}>
        <span className="todo-mobile-date">{props.date} {props.time}</span>
        <textarea
          className={`${props.isUpdating ? "todo-mobile-title-updating" : "todo-mobile-title"}`}
          value={props.name}
          disabled={props.isUpdating ? false : true}
          onChange={handleChange}
          ref={textAreaRef}
          rows={1}
          onFocus={(e)=> e.currentTarget.setSelectionRange(e.currentTarget.value.length, e.currentTarget.value.length)}
        ></textarea>
      </div>
      <div className={`${props.isUpdating ? "display-none" : "todo-mobile-button-wrapper"}`}>
        <button onClick={()=>{
          props.toggleIsUpdating(props.id)
          handleFocus()
          }} className="todo-mobile-edit-button">Edit</button>
        <button onClick={()=>props.deleteTodo(props.id)}className="todo-mobile-delete-button">Delete</button>
      </div>
      <div className={`${props.isUpdating ? "todo-mobile-update-btn-wrapper" : "display-none"}`}>
        <button onClick={()=>props.updateTodo(props.id)} className="todo-mobile-update-button">Update</button>
      </div>
    </div>
  )
}