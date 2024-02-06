import React, {useRef, useEffect, useState} from "react";
import style from "./todo.css"
import DeleteIcon from "../icons/DeleteIcon/DeleteIcon";
import EditIcon from "../icons/EditIcon/EditIcon";

export default function Todo(props) {

  const textAreaRef = useRef(null)
 /*  const [value, setValue] = useState(props.name); */

  /* const resizeTextArea = (e) => {
    setValue(e.target.value)
  } */

  useEffect(() => {
    textAreaRef.current.style.height = "auto"
    textAreaRef.current.style.height = textAreaRef.current.scrollHeight + "px";
  },[props.name])

  return(
    <div className="todo">
      <div className="todo-info">
        <textarea className="todo-info-title"
          value={props.name}
          disabled={props.isUpdating ? false : true}
          ref={textAreaRef}
          rows="1"
        />
        <span className="todo-date">{props.date} {props.time}</span>
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