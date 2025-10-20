import { useState } from 'react'
import PropTypes from 'prop-types'

function TaskForm({ onAddTask }) {
  const [taskText, setTaskText] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    onAddTask(taskText)
    setTaskText('')
  }

  return (
    <form className="task-form" onSubmit={handleSubmit}>
      <input
        type="text"
        className="task-input"
        placeholder="Add a new task..."
        value={taskText}
        onChange={(e) => setTaskText(e.target.value)}
      />
      <button 
        type="submit" 
        className="add-btn"
        disabled={!taskText.trim()}
      >
        Add Task
      </button>
    </form>
  )
}

TaskForm.propTypes = {
  onAddTask: PropTypes.func.isRequired
}

export default TaskForm
