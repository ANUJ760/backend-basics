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

## Database Setup Clarification

- This project does not ship with a pre-created MongoDB database.
- Set `MONGO_URI` in `server/.env` to a real MongoDB connection string.
- MongoDB creates the database automatically on the first successful write operation.

## Server Coding Practices

1. Keep routes thin and controllers focused.
2. Keep database logic inside models where possible.
3. Use `try/catch` in async controllers and forward errors to middleware.
4. Validate `req.body`, `req.params`, and auth token before DB queries.
5. Avoid duplicated logic; reuse middleware/helpers.
6. Use clear status codes and consistent JSON response structure.

## Server Naming Conventions

- Controller function names: verb + resource (`registerUser`, `loginUser`, `createTodo`)
- Middleware names: purpose-based (`authMiddleware`, `errorHandler`)
- Model names: singular `PascalCase` (`User`, `Todo`)
- Route files: resource-based `camelCase` (`authRoutes.js`, `todoRoutes.js`)
- Env variables: `UPPER_SNAKE_CASE` (`PORT`, `JWT_SECRET`)

Read chapter files in this folder and subfolders for detailed explanations.
