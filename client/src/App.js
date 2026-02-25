import { useState } from "react"
import TodoList from "./components/Todolist"
import AddTodo from "./components/Addtodo"

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
    <div>
      <h1>Todo App</h1>
      <AddTodo onAdd={addTodo} />
      <TodoList todos={todos} />
    </div>
  )
}

export default App