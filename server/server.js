require('dotenv').config(); // Load environment variables from .env file
const express = require("express"); // Import Express framework
const cors = require("cors"); // Import CORS middleware
const moongose = require("mongoose"); // Import Mongoose for MongoDB interaction
const { default: mongoose } = require('mongoose');

const app = express(); // Create an Express application
app.use(cors()); // Enable CORS for all routes
app.use(express.json()); // Middleware to parse JSON bodies
app.use("/api/auth", require("./routes/authRoutes")) // Use the authentication routes defined in authRoutes.js for any routes starting with /api/auth.

// Connect to MongoDB using Mongoose
mongoose.connect(process.env.MONGO_URI) // Connect to MongoDB using the URI from environment variables.
    .then(() => console.log("Database connected successfully")) // Log success message if connection is successful
    .catch(err => console.log(err)) // Log any errors that occur during connection


app.get("/", (req, res) => { // Define a route for the root URL.
    res.send("API is running successfully!"); // Send a response to indicate that the API is running
})

const PORT = process.env.PORT || 5000; // Define the port to listen on, using environment variable or default to 5000
app.listen(PORT, () => console.log("Server running on port " + PORT)); // Start the server and log the port it's running on