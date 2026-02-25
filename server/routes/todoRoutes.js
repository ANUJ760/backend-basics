const router =("express").Router() // Import the Express.js Router to define routes for todo operations.
const auth = require("../middleware/authMiddleware") // Import the authentication middleware to protect the todo routes.
const {
    getTodos,
    createTodo,
    updateTodo,
    deleteTodo
} = require("../controllers/todoController") // Import the controller functions for handling todo operations.

router.get("/", getTodos)   // Define a GET route for '/' that uses the 'getTodos' function to retrieve all todo items for the authenticated user.
router.post("/", createTodo) // Define a POST route for '/' that uses the 'createTodo' function to create a new todo item for the authenticated user.
router.put("/:id", updateTodo) // Define a PUT route for '/:id' that uses the 'updateTodo' function to update an existing todo item by its ID for the authenticated user.
router.delete("/:id", deleteTodo) // Define a DELETE route for '/:id' that uses the 'deleteTodo' function to delete an existing todo item by its ID for the authenticated user.

module.exports = router // Export the router to be used in other parts of the application, such as the main server file.