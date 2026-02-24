const mongoose = require('mongoose'); // We require the Mongoose library to interact with MongoDB in every file where we need to define a model.

const todoSchema = new mongoose.Schema({
    user: {type: mongoose.Schema.Types.ObjectId, ref: "User"}, // Takes User from User.js and creates a reference to it. This allows us to associate each todo item with a specific user.
    title: String,
    completed: {type: Boolean, default: false}
}, {timestamps: true})

module.exports = mongoose.model("Todo", todoSchema) // We export the model so that it can be used in other parts of the application, such as in route handlers to create, read, update, or delete todo items.
