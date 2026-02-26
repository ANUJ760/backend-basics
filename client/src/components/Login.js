import {useState} from "react" 
import API from "./api"

function Login({setToken}) {
    const [email, setEmail] = useState("") // State variable to hold the email input value.
    const [password, setPassword]  =useState("")

    const handleLogin = async() => {
        try {
            const res = await API.post("/auth/login", {
                email,
                password
            }) // Make a POST request to the /auth/login endpoint of the backend API with the email and password as the request body to attempt user login.
            localStorage.setItem("token", res.data.token) // If the login is successful, store the received token in local storage for future authenticated requests.
            setToken(res.data.token) // If the login is successful, store the received token in local storage and update the parent component's state with the new token.
        } catch (err) {
            console.error("Login failed!")
        }
    }
}

return (
    <div>
        <h2>Login</h2>
        <input
            placeholder = "EMAIL"
            value = {email}
            onChange = {e => setEmail(e.target.value)} // Update the email state variable whenever the input value changes.
        />
        <input
            placeholder = "PASSWORD"
            value = {password}
            onChange = {e => setPassword(e.target.value)} // Update the password state variable whenever the input value changes.
        />
        <button onClick = {handleLogin}>LOGIN</button>
    </div>
    
)

export default Login // default means that when this file is imported, the Login component will be the default export that is imported. This allows other parts of the application to import the Login component without needing to use curly braces or specify a named export.