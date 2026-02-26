import { useState } from "react"
import API from "../api"

function Register({ setToken }) {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [errorMessage, setErrorMessage] = useState("")
  const [isLoading, setIsLoading] = useState(false)

  const handleRegister = async e => {
    e.preventDefault()
    setErrorMessage("")

    const trimmedName = name.trim()
    const trimmedEmail = email.trim()
    if (!trimmedName || !trimmedEmail || !password) {
      setErrorMessage("Name, email, and password are required.")
      return
    }

    setIsLoading(true)
    try {
      const res = await API.post("/auth/register", {
        name: trimmedName,
        email: trimmedEmail,
        password
      })

      localStorage.setItem("token", res.data.token)
      setToken(res.data.token)
    } catch (err) {
      setErrorMessage(err.response?.data?.msg || "Registration failed. Please try again.")
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="auth-panel">
      <h2>Register</h2>
      <form onSubmit={handleRegister} className="auth-form">
        <input
          className="todo-input"
          placeholder="NAME"
          autoComplete="name"
          value={name}
          onChange={e => setName(e.target.value)}
        />
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
          autoComplete="new-password"
          value={password}
          onChange={e => setPassword(e.target.value)}
        />
        {errorMessage ? <p className="auth-error">{errorMessage}</p> : null}
        <button className="glass-btn" type="submit" disabled={isLoading}>
          {isLoading ? "Creating account..." : "Register"}
        </button>
      </form>
    </div>
  )
}

export default Register
