import TodoItem from "./TodoItem"

function TodoList({ todos }) {
  if (!todos.length) {
    return <p className="empty-state">No todos yet. Add your first task.</p>
  }

  return (
    <ul className="todo-list">
      {todos.map(todo => (
        <TodoItem key={todo._id} todo={todo} />
      ))}
    </ul>
  )
}

export default TodoList
