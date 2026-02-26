import axios from "axios" // Import the Axios library for making HTTP requests.

const API = axios.create({
    baseURL: "http://localhost:5000/api" // Set the base URL for all API requests to the backend server.
})

// to send token with every request
API.interceptors.request.use(req => {
    const token = localStorage.getItem("token") // Retrieve the authentication token from local storage.
    if(token) req.headers.Authorization = token // If a token exists, add it to the Authorization header of the request.
    return req // Return the modified request object to be sent to the server.
})

export default API // Export the configured Axios instance for use in other parts of the application to make API requests.