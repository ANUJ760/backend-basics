import { useState } from "react"

function AddTodo({ onAdd }) {
  const [title, setTitle] = useState("")

  const handleSubmit = () => {
    if (!title) return
    onAdd(title)
    setTitle("")
  }

  return (
    <div>
      <input
        value={title}
        onChange={e => setTitle(e.target.value)}
        placeholder="Enter todo"
      />
      <button onClick={handleSubmit}>
        Add
      </button>
    </div>
  )
}

export default AddTodo