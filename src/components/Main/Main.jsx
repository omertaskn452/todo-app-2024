import React, {useEffect, useState, useRef} from "react";
import style from "./main.css"
import DeleteIcon from "../icons/DeleteIcon/DeleteIcon";
import EditIcon from "../icons/EditIcon/EditIcon";
import AcceptIcon from "../icons/AcceptIcon/AcceptIcon";
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
    if(newTodoName){
      setTodos(
        [
          ...todos,
          {todoName: newTodoName, id: nanoid(), isUpdating: false ,date: date, time: time}
        ]
      );
    }
    else{
      alert("Todo name must not be empty")
    }
    
  }

  const deleteTodo = (id) => {
    setTodos(
      todos.filter(todo => 
        todo.id !== id)
    )
  }

  const toggleIsUpdating = (id) => {
    setTodos(prevState => {
      return prevState.map(todo => {
        return (todo.id === id ? {...todo, isUpdating: !todo.isUpdating} : todo)
      })
    }) 
  }

  const handleTextAreaChange = (id, value) => {
    setTodos(prevState => {
      return prevState.map(todo => {
        return todo.id === id ? {...todo, todoName:value} : todo
      })
    }
    )
  }

  const updateTodo = (id) => {
   if((todos.find(todo => todo.id === id).todoName.trim().length) === 0){
    alert("Todo name must not be empty")
   }
   else(
    toggleIsUpdating(id)
   )
  }

  const showTodos = () => {
    todos.map(todo => (console.log(todo)))
  }

  const handleKeyDown = (e) => {
    if(e.key === "Enter"){
      addingNewTodo();
    }
  }

  let todoElements = todos.map((todo) => 
    <Todo
      name={todo.todoName}
      id={todo.id}
      date={todo.date}
      time={todo.time}
      isUpdating={todo.isUpdating}
      deleteTodo={deleteTodo}
      toggleIsUpdating={toggleIsUpdating}
      updateTodo={updateTodo}
      handleTextAreaChange={handleTextAreaChange}
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
            onKeyDown={handleKeyDown}
            placeholder="Add new todo"/>
          <button 
            onClick={addingNewTodo} 
            className="submit-button">ADD</button>
        </div>
        <div className="todos">
          {todoElements}
        </div>
        {/* This button just using for test when developing the app */}
        <button onClick={showTodos} className="show-todos-button">Show Todos</button>
      </div>
    </div>
  )
}