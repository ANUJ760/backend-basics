const mongoose = require('mongoose')

const schema = new mongoose.Schema ({
    name: String,
    email: { type: String, unique: true},
    password: String
}, {timestamps: true}) // timestamps: true will automatically add createdAt and updatedAt fields to the schema

module.exports = mongoose.model("User", schema) // Export the User model based on the defined schema

// This code exports a Mongoose model.