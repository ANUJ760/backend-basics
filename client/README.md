# Client (React)

This frontend is intentionally simple to keep focus on backend learning.

## What this client does

- Register and login users
- Uses separate auth pages: `/login` and `/register`
- Save JWT token in localStorage
- Create/read/update/delete todos
- Send token in API requests
- Show form validation and server error messages for login/register
- Disable auth submit buttons while requests are in progress

## Important Beginner Notes

- React components are reusable UI blocks.
- `components/` folder is created manually for project organization.
- Frontend never talks directly to MongoDB.
- Frontend only talks to backend API.

## Client Coding Practices

1. Keep components small and focused.
2. Keep API call logic in `api.js`, not scattered across many components.
3. Use state names that describe meaning (`todos`, `loading`, `errorMessage`).
4. Prefer controlled inputs for forms.
5. Keep UI behavior predictable (disable button during request, show messages clearly).

## Frontend Naming Conventions

- React components: `PascalCase` (`AddTodo`, `TodoList`, `TodoItem`)
- Hooks/state variables: `camelCase` (`setTodos`, `isLoading`)
- Event handlers: `handleX` pattern (`handleSubmit`, `handleDelete`)
- CSS classes: lowercase with hyphen (`app-shell`, `todo-item`)
- Boolean variables: prefixes like `is`, `has`, `can` (`isAuthenticated`, `hasError`)

## Run

```bash
npm install
npm start
```
