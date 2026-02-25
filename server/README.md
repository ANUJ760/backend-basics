# Server Guide

This backend is built with Node.js, Express, MongoDB, and Mongoose.

## Folder Purpose

- `models/`: database schema and model definitions
- `routes/`: endpoint-to-controller mapping
- `controllers/`: business logic
- `middleware/`: reusable request processing (auth, errors)

## Key Concepts

- `express()` creates the server application object.
- `app.use()` registers middleware/routes.
- `express.json()` parses incoming JSON into `req.body`.
- `req` is the incoming request object.
- `res` is the outgoing response object.
- `async/await` is used for asynchronous DB operations.

Read chapter files in this folder and subfolders for detailed explanations.
