const todo = require("../models/todo")
const todo = require("../models/todo")
const todo = require("../models/todo") // We require the Todo model to interact with the todo collection in the MongoDB database.

exports.getTodo = async (req, res) => {
    const todos = await todo.find({user: req.user})
    res.json(todos) // Find all todo items in the database that are associated with the authenticated user (using req.user, which is set by the authentication middleware) and return them as a JSON response.
}

exports.createTodo = async (req, res) => {
    const todo = await todo.create({
        user: req.user,
        title: req.body.title
    })
    res.json(todo) // Create a new todo item in the database with the title provided in the request body and associate it with the authenticated user. Return the created todo item as a JSON response. 
}

exports.updateTodo = async (req, res) => {
    const todo = await todo.findByIdAndUpdate(
        req.params.id, // Find a todo item by its ID (provided in the request parameters) and update it with the new data provided in the request body. The ID is typically passed as part of the URL, for example: /api/todos/:id.
        req.body, // The new data for the todo item is taken from the request body, which may include fields like 'title' or 'completed' to update the corresponding fields in the database.
        {new: true} // The {new: true} option in the findByIdAndUpdate method tells Mongoose to return the updated document instead of the original document before the update. This allows us to send the updated todo item back in the response.
    )
    res.json(todo) // Update an existing todo item in the database by its ID (provided in the request parameters) with the new data provided in the request body. The {new: true} option ensures that the updated document is returned. Return the updated todo item as a JSON response.
}

exports.deleteTodo = async (req, res) => {
    await todo.findByIdAndDelete(req.params.id) // Find a todo item by its ID (provided in the request parameters) and delete it from the database. The ID is typically passed as part of the URL, for example: /api/todos/:id.
    res.json({msg: "Todo deleted successfully"}) // Delete a todo item from the database by its ID (provided in the request parameters). After deletion, return a JSON response with a message indicating that the todo item was deleted successfully.
}