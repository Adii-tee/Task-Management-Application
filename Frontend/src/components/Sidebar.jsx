function Sidebar({ activePage, setActivePage }) {
  return (
    <aside className="sidebar">
      <button
        className={activePage === 'dashboard' ? 'active' : ''}
        onClick={() => setActivePage('dashboard')}
      >
        Dashboard
      </button>

      <button
        className={activePage === 'tasks' ? 'active' : ''}
        onClick={() => setActivePage('tasks')}
      >
        Tasks
      </button>
    </aside>
  )
}

export default Sidebar