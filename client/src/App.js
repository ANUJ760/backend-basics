import { useState } from "react"
import TodoList from "./components/Todolist"
import AddTodo from "./components/Addtodo"
import "./App.css"

function App() {
  const [todos, setTodos] = useState([])

  const addTodo = (title) => {
    const newTodo = {
      _id: Date.now().toString(),
      title
    }
    setTodos([...todos, newTodo])
  }

  return (
    <div className="app-shell">
      <div className="app-card">
        <h1 className="app-title">Todo App</h1>
        <p className="app-subtitle">Sky Blue Theme with Glass UI</p>
      <AddTodo onAdd={addTodo} />
      <TodoList todos={todos} />
      </div>
    </div>
  )
}

export default App
