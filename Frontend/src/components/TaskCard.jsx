function TaskCard({ task, onDelete, onStatusChange }) {
  const handleStatusChange = (event) => {
    onStatusChange(task._id, event.target.value)
  }

  const handleDelete = () => {
    onDelete(task._id)
  }

  return (
    <div className="task-card">
      <div className="task-content">
        <h3>{task.title}</h3>

        <p>
          {task.description || 'No description provided'}
        </p>

        <div className="task-status">
          <label htmlFor={`status-${task._id}`}>
            Status:
          </label>

          <select
            id={`status-${task._id}`}
            value={task.status}
            onChange={handleStatusChange}
          >
            <option value="Pending">Pending</option>
            <option value="In Progress">In Progress</option>
            <option value="Completed">Completed</option>
          </select>
        </div>
      </div>

      <div className="task-actions">
        <button
          type="button"
          onClick={handleDelete}
        >
          Delete
        </button>
      </div>
    </div>
  )
}

export default TaskCard