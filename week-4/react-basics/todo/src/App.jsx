import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
let globalId = 1

function App() {
  const [input, setInput] = useState({ title: '', description: '' });
  const [todos, setTodos] = useState([]);

  const inputChangeHandler = (event) => {
    console.log("event.target",event.target)
    const key = event.target.id;
    const value = event.target.value;
    // console.log("key, value",key, value)
    setInput((prev) => {
      return {...prev, [key] : value}
    }) 
  }

  const addTodo = (event) => {
    event.preventDefault()
    const title = input.title
    const description = input.description
    console.log(title, description)
    const id = globalId
    setTodos((prev) => {
      return [...prev, {id, title, description}]
    })
    setInput({title : '', description : ''})
    globalId++ 
  }


  return (

      <div>
        <input  
          type="text"
          id='title'
          placeholder='Todo Title' 
          value={input.title} 
          onChange={inputChangeHandler}/>
          {' '}<br /><br />
        <input  
          type="text" 
          id='description' 
          placeholder='Description' 
          value={input.description}
          onChange={inputChangeHandler}
        />
        <br />
        <br />
        <button onClick={addTodo}>Add Todo </button>
        <br />
        <br />
        {
          todos.map((todo) => {
            console.log("todo", todo)
            return (
              <div key={todo.id} id={todo.id}>
                <div>{todo.title}</div>
                <div>{todo.description}</div>
              </div>
            )
          })
        }
      </div>
  )
}

export default App
