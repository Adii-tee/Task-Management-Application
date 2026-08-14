import { useEffect, useState } from 'react'
import TaskForm from '../components/TaskForm'
import TaskCard from '../components/TaskCard'

import {
  getTasks,
  createTask,
  updateTask,
  deleteTask,
} from '../service/taskService'

function Tasks() {
  const [tasks, setTasks] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')

  // Load tasks from MongoDB
  const loadTasks = async () => {
    try {
      setLoading(true)

      const data = await getTasks()

      setTasks(data)
      setError('')
    } catch (error) {
      console.error('Load tasks error:', error)
      setError('Unable to load tasks')
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    loadTasks()
  }, [])

  // Add task
  const addTask = async (task) => {
    try {
      const newTask = await createTask(task)

      setTasks((currentTasks) => [
        newTask,
        ...currentTasks,
      ])

      setError('')
    } catch (error) {
      console.error('Create task error:', error)
      setError('Unable to create task')
    }
  }

  // Update task status
  const changeStatus = async (id, status) => {
    try {
      const updatedTask = await updateTask(id, {
        status,
      })

      setTasks((currentTasks) =>
        currentTasks.map((task) =>
          task._id === id ? updatedTask : task
        )
      )

      setError('')
    } catch (error) {
      console.error('Status update error:', error)
      setError('Unable to update task status')
    }
  }

  // Delete task
  const removeTask = async (id) => {
    try {
      await deleteTask(id)

      setTasks((currentTasks) =>
        currentTasks.filter((task) => task._id !== id)
      )

      setError('')
    } catch (error) {
      console.error('Delete task error:', error)
      setError('Unable to delete task')
    }
  }

  return (
    <div>
      <h1>Tasks</h1>

      <TaskForm onAddTask={addTask} />

      {error && (
        <p className="error">
          {error}
        </p>
      )}

      {loading ? (
        <p>Loading tasks...</p>
      ) : tasks.length === 0 ? (
        <p>No tasks found. Add your first task.</p>
      ) : (
        <div className="task-list">
          {tasks.map((task) => (
            <TaskCard
              key={task._id}
              task={task}
              onDelete={removeTask}
              onStatusChange={changeStatus}
            />
          ))}
        </div>
      )}
    </div>
  )
}

export default Tasks