const router = require("express").Router() // Import the Express.js Router to define routes for authentication.
const { register, login}  = require("../controllers/authController") // Import the 'register' and 'login' functions from the authController to handle registration and login logic.


router.post("/register", register) // Define a POST route for '/register' that uses the 'register' function to handle user registration.
router.post("/login", login) // Define a POST route for '/login' that uses the 'login' function to handle user login.

module.exports = router // Export the router to be used in other parts of the application, such as the main server file.