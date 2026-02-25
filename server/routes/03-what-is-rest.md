# 03 - What Is REST?

REST = Representational State Transfer.
It is a style for designing APIs.

## Core Idea

Use clear URLs for resources and HTTP methods for actions.

Resource example: `todos`
- `GET /api/todos`
- `POST /api/todos`
- `PUT /api/todos/:id`
- `DELETE /api/todos/:id`

## Endpoint Meaning

An endpoint is a specific API URL + method combination.
Example: `POST /api/auth/login`.

## REST Best Practices (Beginner Level)

- Use nouns in URLs (`/todos`, not `/getTodosNow`).
- Use status codes correctly.
- Return JSON consistently.
- Keep API predictable.

## Why REST Helps

It makes backend easy to understand for other developers and frontend teams.

## Misconception

"REST means only JSON."

Not exactly. REST is an architectural style. JSON is common, but not the definition of REST.
