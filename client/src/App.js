import { useEffect, useState } from "react"
import TodoList from "./components/Todolist"
import AddTodo from "./components/Addtodo"
import Login from "./components/Login"
import Register from "./components/Register"
import "./App.css"
import API from "./api"

function App() {
  const [todos, setTodos] = useState([])
  const [token, setToken] = useState(localStorage.getItem("token") || null) // Initialize the token state variable with the value from local storage if it exists, or null if it doesn't.

  const fetchTodos = async () => {
    try {
      const res = await API.get("/todos") // Make a GET request to the /todos endpoint of the backend API to fetch the list of todos.
      setTodos(res.data) // Update the state with the fetched todos data.
    } catch (err) {
      console.log(err) // Log any errors that occur during the API request to the console.
    }
  }

  useEffect(() => {
    if (token) fetchTodos() // Call the fetchTodos function when the component mounts to load the initial list of todos.
  }, [token]) // Add token as a dependency to the useEffect hook to refetch todos whenever the token changes (e.g., after login or logout).

 const addTodo = async (title) => {
  try {
    await API.post("/todos", {title})
    fetchTodos() // After successfully adding a new todo, call fetchTodos to refresh the list of todos displayed in the UI.
  }catch (err) {
    console.log(err)
  }
}

  const logout = () => {
    localStorage.removeItem("token")
    setToken(null)
  }

  if(!token) {
    return (
      <div>
        <Login setToken = {setToken}/>
        <Register setToken = {setToken}/>
      </div>
    )
  }




  return (
    <div className="app-shell">
      <div className="app-card">
        <h1 className="app-title">Todo App</h1>
        <p className="app-subtitle">A CRUD operations tutorial!</p>
        <button onClick={logout} className="logout-button">Logout</button>
      <AddTodo onAdd={addTodo} />
      <TodoList todos={todos} />
      </div>
    </div>
  )
}

export default App
