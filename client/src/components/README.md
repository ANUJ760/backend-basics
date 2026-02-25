# Components Guide

React components are reusable UI blocks.

- `Addtodo` handles adding a todo title.
- `Todolist` renders the list.
- `TodoItem` renders one todo row.

The `components` folder is created manually for organization and reusability.

## Naming Conventions for Components

- Preferred file names: `AddTodo.js`, `TodoList.js`, `TodoItem.js` (PascalCase)
- Exported component name should match file name.
- Props should be descriptive (`onAdd`, `todos`, `onToggle`) instead of generic names.

## Good Component Practices

1. Keep component props small and explicit.
2. Keep rendering logic simple.
3. Move reusable logic to parent or utility files when components grow.
4. Avoid deeply nested JSX for beginner readability.
