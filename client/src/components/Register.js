import { useState } from "react";
import API from "./api"; // No need for curly braces since API is the default export from the api.js file.

function Register({setToken}) {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const handleRegister = async() => {
        try {
            const res = await API.post("/auth/register", {
                name,
                email,
                password

            }) // Make a POST request to the /auth/register endpoint of the backend API with the name, email, and password as the request body to attempt user registration.
            localStorage.setItem("token", res.data.token)
            setToken(res.data.token) // If the registration is successful, store the received token in local storage and update the parent component's state with the new token.
        } catch (err) {
            console.error("Registration failed")
        }
    }

    return (
        <div>
            <h2>Register</h2>
            <input
                placeholder = "NAME"
                value = {name}
                onChange = {e => setName(e.target.value)}
            />
            <input
                placeholder = "EMAIL"
                value = {email}
                onChange = {e => setEmail(e.target.value)}
            />
            <input
                placeholder = "PASSWORD"
                type = "password"
                value = {password}
                onChange = {e => setPassword(e.target.value)}
            />
            <button onClick={handleRegister}>Register</button>
        </div>
    )
}

export default Register