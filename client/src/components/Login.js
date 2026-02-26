import { useState } from "react"
import API from "../api"

function Login({ setToken }) {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [errorMessage, setErrorMessage] = useState("")
  const [isLoading, setIsLoading] = useState(false)

  const handleLogin = async e => {
    e.preventDefault()
    setErrorMessage("")

    const trimmedEmail = email.trim()
    if (!trimmedEmail || !password) {
      setErrorMessage("Email and password are required.")
      return
    }

    setIsLoading(true)
    try {
      const res = await API.post("/auth/login", {
        email: trimmedEmail,
        password
      })

      localStorage.setItem("token", res.data.token)
      setToken(res.data.token)
    } catch (err) {
      setErrorMessage(err.response?.data?.msg || "Login failed. Please try again.")
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="auth-panel">
      <h2>Login</h2>
      <form onSubmit={handleLogin} className="auth-form">
        <input
          className="todo-input"
          placeholder="EMAIL"
          type="email"
          autoComplete="email"
          value={email}
          onChange={e => setEmail(e.target.value)}
        />
        <input
          className="todo-input"
          placeholder="PASSWORD"
          type="password"
          autoComplete="current-password"
          value={password}
          onChange={e => setPassword(e.target.value)}
        />
        {errorMessage ? <p className="auth-error">{errorMessage}</p> : null}
        <button className="glass-btn" type="submit" disabled={isLoading}>
          {isLoading ? "Logging in..." : "Login"}
        </button>
      </form>
    </div>
  )
}

export default Login
