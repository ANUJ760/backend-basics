# 06 - Folder Structure Explained

## Why Folder Separation Exists

Separation keeps code readable and maintainable.

- `models/`: database shapes and DB interaction layer
- `routes/`: URL paths and HTTP method mapping
- `controllers/`: business logic
- `middleware/`: reusable pre-processing (auth checks, logging)
- `config/`: setup code (database connection)

## Route vs Controller

- Route decides "which function runs for this endpoint"
- Controller decides "what to do"

## Why Mongoose Mostly Appears in Models

Mongoose defines schemas and handles database operations. That responsibility belongs to models.
Controllers call model methods instead of writing raw DB logic everywhere.

## Benefits for Beginners

- easier to locate bugs
- easier teamwork
- easier testing
- cleaner mental model

## Naming Conventions by Folder

- `models/`: singular `PascalCase` model names (`User`, `Todo`)
- `controllers/`: action-based `camelCase` function names (`createTodo`, `updateTodo`)
- `routes/`: resource-based route files (`todoRoutes.js`, `authRoutes.js`)
- `middleware/`: purpose-based names (`authMiddleware.js`, `errorMiddleware.js`)

Consistent naming reduces confusion when navigating files and imports.

## Practical Coding Practices for Folder-Based Architecture

1. Do not put DB query code directly in route files.
2. Keep route definitions short and readable.
3. Keep controller functions focused on one use case each.
4. Reuse middleware for repeated checks (auth, validation, errors).
