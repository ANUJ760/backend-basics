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
