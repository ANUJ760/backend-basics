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
  const [pathname, setPathname] = useState(window.location.pathname)

  const navigate = path => {
    if (window.location.pathname === path) return
    window.history.pushState({}, "", path)
    setPathname(path)
  }

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

  useEffect(() => {
    const onPopState = () => setPathname(window.location.pathname)
    window.addEventListener("popstate", onPopState)
    return () => window.removeEventListener("popstate", onPopState)
  }, [])

  useEffect(() => {
    if (!token && pathname === "/") {
      navigate("/login")
    }
    if (token && (pathname === "/login" || pathname === "/register")) {
      navigate("/")
    }
  }, [token, pathname])

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
    navigate("/login")
  }

  if(!token) {
    const isRegisterPage = pathname === "/register"
    const isLoginPage = pathname === "/login"

    return (
      <div className="app-shell">
        <div className="app-card">
          <h1 className="app-title">Todo App</h1>
          <p className="app-subtitle">Authenticate to continue.</p>

          {isRegisterPage ? <Register setToken={setToken} /> : null}
          {isLoginPage ? <Login setToken={setToken} /> : null}
          {!isRegisterPage && !isLoginPage ? <Login setToken={setToken} /> : null}

          <p className="auth-switch">
            {isRegisterPage ? "Already have an account?" : "Need an account?"}{" "}
            <button
              type="button"
              className="auth-link"
              onClick={() => navigate(isRegisterPage ? "/login" : "/register")}
            >
              {isRegisterPage ? "Login" : "Register"}
            </button>
          </p>
        </div>
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
