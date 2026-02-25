// authController.js - This file contains the controller functions for handling user authentication.

const user = require("../models/User")
const bcrypt = require("bcryptjs")
const jwt = require("jsonwebtoken")
const User = require("../models/User")

exports.register = async (req, res) => { // exports a function named 'register' that handles user registration.
    const {name, email, password} = req.body

    const existing = await User.findOne({ email }) // Check if a user with the provided email already exists in the database.
    if(existing) return res.status(400).json({msg: "User already exists"}) // If a user with the email exists, return a 400 Bad Request response with a message.

    const hash = await bcrypt.hash(password, 10) // Hash the provided password using bcrypt with a salt rounds of 10 for security.

    const user = await User.create({
        name,
        email,
        password: hash // Store the hashed password in the database instead of the plain text password for security reasons.
    })

    const token = jwt.sign({id: user._id}, process.env.JWT_SECRET, {expiresIn: "1d"}) // Generate a JSON Web Token (JWT) that includes the user's ID as payload, signed with a secret key from environment variables, and set to expire in 1 day.

    res.json({token})
}

exports.login = async (req, res) => { // req and res are mapped to the request and response objects in an Express.js route handler. This function handles user login.
    const {email,  password} = req.body
    
    const user = await User.findOne({email}) // Find a user in the database with the provided email.
    if (!user) return res.status(400).json({msg: "INVALID CREDENTIALS"}) // If no user is found, return a 400 Bad Request response with a message.

    const matches = await bcrypt.compare(password, user.password) // Compare the provided password with the hashed password stored in the database using bcrypt.
    if(!matches) return res.status(400).json({msg: "WRONG PASSWORD"}) // If the passwords do not match, return a 400 Bad Request response with a message.

    const token = jwt.sign({id: user._id}, process.env.JWT_SECRET, {expiresIn: "1d"}) // If the passwords match, generate a JSON Web Token (JWT) that includes the user's ID as payload, signed with a secret key from environment variables, and set to expire in 1 day.

    res.json({token}) // Return the generated token in the response as JSON.
}