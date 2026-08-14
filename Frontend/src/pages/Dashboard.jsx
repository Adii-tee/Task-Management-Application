import { useEffect, useState } from 'react'
import { getTasks } from '../service/taskService'

function Dashboard() {
  const [tasks, setTasks] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const loadTasks = async () => {
      try {
        const data = await getTasks()
        setTasks(data)
      } catch (error) {
        console.error('Failed to load dashboard tasks:', error)
      } finally {
        setLoading(false)
      }
    }

    loadTasks()
  }, [])

  const totalTasks = tasks.length

  const completedTasks = tasks.filter(
    (task) => task.status === 'Completed'
  ).length

  const pendingTasks = tasks.filter(
    (task) => task.status === 'Pending'
  ).length

  const inProgressTasks = tasks.filter(
    (task) => task.status === 'In Progress'
  ).length

  if (loading) {
    return <p>Loading dashboard...</p>
  }

  return (
    <div>
      <h1>Dashboard</h1>

      <div className="stats">
        <div className="stat-card">
          <h3>Total Tasks</h3>
          <p>{totalTasks}</p>
        </div>

        <div className="stat-card">
          <h3>Completed</h3>
          <p>{completedTasks}</p>
        </div>

        <div className="stat-card">
          <h3>Pending</h3>
          <p>{pendingTasks}</p>
        </div>

        <div className="stat-card">
          <h3>In Progress</h3>
          <p>{inProgressTasks}</p>
        </div>
      </div>
    </div>
  )
}

export default Dashboard