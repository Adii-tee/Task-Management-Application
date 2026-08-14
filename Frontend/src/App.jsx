import { useState } from 'react'
import Navbar from './components/Navbar'
import Sidebar from './components/Sidebar'
import Dashboard from './pages/Dashboard'
import Tasks from './pages/Tasks'
import './App.css'

function App() {
  const [activePage, setActivePage] = useState('dashboard')

  return (
    <div className="app">
      <Navbar />

      <div className="main-layout">
        <Sidebar
          activePage={activePage}
          setActivePage={setActivePage}
        />

        <main className="content">
          {activePage === 'dashboard' && <Dashboard />}
          {activePage === 'tasks' && <Tasks />}
        </main>
      </div>
    </div>
  )
}

export default App