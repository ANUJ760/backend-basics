# 04 - What Is CRUD?

CRUD is the 4 basic data operations:

- `Create`
- `Read`
- `Update`
- `Delete`

For Todo App:
- Create: add a new todo
- Read: list all your todos
- Update: mark todo complete or edit title
- Delete: remove todo

## CRUD and HTTP Mapping

- Create -> `POST`
- Read -> `GET`
- Update -> `PUT/PATCH`
- Delete -> `DELETE`

## Why CRUD Matters

Most business applications are combinations of CRUD workflows.
If you understand CRUD deeply, you can build many practical backends.

## Edge Cases in CRUD

- Update with invalid ID -> `404` or `400`
- Delete non-existing item -> `404`
- Read without auth token -> `401`
- Update another user's todo -> `403`
