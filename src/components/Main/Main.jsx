import React, {useEffect, useState} from "react";
import style from "./main.css"
import DeleteIcon from "../icons/DeleteIcon/DeleteIcon";
import EditIcon from "../icons/EditIcon/EditIcon";
import Todo from "../Todo/Todo";
import { nanoid } from "nanoid";

export default function Main() {

  const  [todos, setTodos] = useState(JSON.parse(localStorage.getItem("Todos")) || [])

  const [newTodoName, setNewTodoName] = useState("")

  useEffect (() => {
    localStorage.setItem("Todos", JSON.stringify(todos))
  }, [todos])

  const addingNewTodo = () => {
    const date = new Date().toLocaleDateString()
    const time = new Date().toLocaleTimeString()
    setTodos(
      [
        ...todos,
        {todoName: newTodoName, id: nanoid(), date: date, time: time}
      ]
    );
  }

  const deleteTodo = (id) => {
    setTodos(
      todos.filter(todo => 
        todo.id !== id)
    )
    console.log("todo was deleted")
  }

  let todoElements = todos.map((todo) => 
    <Todo
      name={todo.todoName}
      id={todo.id}
      date={todo.date}
      time={todo.time}
      deleteTodo={deleteTodo}
    />  
  )

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
            value={newTodoName}
            onChange={e => setNewTodoName(e.target.value)}
            placeholder="Add new todo" />
            
          <button onClick={addingNewTodo} className="submit-button">ADD</button>
        </div>
        <div className="todos">
          {todoElements}
        </div>
      </div>
    </div>
  )
}