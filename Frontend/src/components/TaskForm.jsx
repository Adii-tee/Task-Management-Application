import { useState } from 'react'

function TaskForm({ onAddTask }) {
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')

  const handleSubmit = async (event) => {
    event.preventDefault()

    if (!title.trim()) {
      return
    }

    await onAddTask({
      title,
      description,
      status: 'Pending',
    })

    setTitle('')
    setDescription('')
  }

  return (
    <form className="task-form" onSubmit={handleSubmit}>
      <h2>Add New Task</h2>

      <input
        type="text"
        placeholder="Task title"
        value={title}
        onChange={(event) => setTitle(event.target.value)}
      />

      <textarea
        placeholder="Task description"
        value={description}
        onChange={(event) =>
          setDescription(event.target.value)
        }
      />

      <button type="submit">
        Add Task
      </button>
    </form>
  )
}

export default TaskForm