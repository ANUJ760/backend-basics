import { useEffect, useState } from "react"
import TodoList from "./components/Todolist"
import AddTodo from "./components/Addtodo"
import "./App.css"
import API from "./api"

function App() {
  const [todos, setTodos] = useState([])

  const fetchTodos = async () => {
    try {
      const res = await API.get("/todos") // Make a GET request to the /todos endpoint of the backend API to fetch the list of todos.
      setTodos(res.data) // Update the state with the fetched todos data.
    } catch (err) {
      console.log(err) // Log any errors that occur during the API request to the console.
    }
  }

  useEffect(() => {
    fetchTodos() // Call the fetchTodos function when the component mounts to load the initial list of todos.
  }, []) // The empty dependency array ensures that the effect runs only once when the component mounts.

 const addTodo = async (title) => {
  try {
    await API.post("/todos", {title})
    fetchTodos() // After successfully adding a new todo, call fetchTodos to refresh the list of todos displayed in the UI.
  }catch (err) {
    console.log(err)
  }
 }

  return (
    <div className="app-shell">
      <div className="app-card">
        <h1 className="app-title">Todo App</h1>
        <p className="app-subtitle">A CRUD operations tutorial!</p>
      <AddTodo onAdd={addTodo} />
      <TodoList todos={todos} />
      </div>
    </div>
  )
}

export default App
