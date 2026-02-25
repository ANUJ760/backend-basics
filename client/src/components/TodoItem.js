function TodoItem({ todo }) {
  return (
    <li className="todo-item">
      <span>{todo.title}</span>
    </li>
  )
}

export default TodoItem
