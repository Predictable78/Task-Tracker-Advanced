import { useAuth } from '../contexts/AuthContext'
import { useTasks } from '../hooks/useTasks'
import TaskForm from './TaskForm'
import TaskList from './TaskList'
import PropTypes from 'prop-types'

function UserDashboard() {
  const { user, logout } = useAuth()
  const { 
    tasks, 
    addTask, 
    deleteTask, 
    toggleTask, 
    editTask, 
    clearCompletedTasks,
    getTaskStats 
  } = useTasks()

  const stats = getTaskStats()

  const handleLogout = () => {
    logout()
  }

  return (
    <div className="dashboard">
      <header className="dashboard-header">
        <div className="user-info">
          <span className="user-avatar">{user?.avatar}</span>
          <div className="user-details">
            <h1>Welcome, {user?.name}!</h1>
            <p className="user-email">{user?.email}</p>
          </div>
        </div>
        <button onClick={handleLogout} className="logout-btn">
          Logout
        </button>
      </header>

      <div className="dashboard-content">
        <div className="task-stats">
          <div className="stat-card">
            <span className="stat-number">{stats.total}</span>
            <span className="stat-label">Total Tasks</span>
          </div>
          <div className="stat-card">
            <span className="stat-number">{stats.pending}</span>
            <span className="stat-label">Pending</span>
          </div>
          <div className="stat-card">
            <span className="stat-number">{stats.completed}</span>
            <span className="stat-label">Completed</span>
          </div>
        </div>

        <div className="task-section">
          <div className="section-header">
            <h2>My Tasks</h2>
            {stats.completed > 0 && (
              <button 
                onClick={clearCompletedTasks}
                className="clear-completed-btn"
              >
                Clear Completed ({stats.completed})
              </button>
            )}
          </div>
          
          <TaskForm onAddTask={addTask} />
          <TaskList
            tasks={tasks}
            onDeleteTask={deleteTask}
            onToggleTask={toggleTask}
            onEditTask={editTask}
          />
        </div>
      </div>
    </div>
  )
}

UserDashboard.propTypes = {
  // No props needed as it uses hooks
}

export default UserDashboard
