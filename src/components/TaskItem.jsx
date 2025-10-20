import { useState } from 'react'
import PropTypes from 'prop-types'

function TaskItem({ task, onDelete, onToggle, onEdit }) {
  const [isEditing, setIsEditing] = useState(false)
  const [editText, setEditText] = useState(task.text)

  const handleEdit = () => {
    onEdit(task.id, editText)
    setIsEditing(false)
  }

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleEdit()
    } else if (e.key === 'Escape') {
      setEditText(task.text)
      setIsEditing(false)
    }
  }

  if (isEditing) {
    return (
      <li className="task-item editing">
        <input
          type="text"
          className="edit-input"
          value={editText}
          onChange={(e) => setEditText(e.target.value)}
          onBlur={handleEdit}
          onKeyDown={handleKeyPress}
          autoFocus
        />
        <button
          className="save-btn"
          onClick={handleEdit}
        >
          Save
        </button>
        <button
          className="cancel-btn"
          onClick={() => {
            setEditText(task.text)
            setIsEditing(false)
          }}
        >
          Cancel
        </button>
      </li>
    )
  }

  return (
    <li className="task-item">
      <span
        className={`task-text ${task.completed ? 'completed' : ''}`}
        style={{
          textDecoration: task.completed ? 'line-through' : 'none',
          opacity: task.completed ? 0.6 : 1
        }}
      >
        {task.text}
      </span>
      <div className="task-actions">
        <button
          className={`toggle-btn ${task.completed ? 'completed' : 'pending'}`}
          onClick={() => onToggle(task.id)}
          title={task.completed ? 'Mark as pending' : 'Mark as complete'}
        >
          {task.completed ? '↶ Undo' : '✓ Complete'}
        </button>
        <button
          className="edit-btn"
          onClick={() => setIsEditing(true)}
          disabled={task.completed}
        >
          Edit
        </button>
        <button
          className="delete-btn"
          onClick={() => onDelete(task.id)}
        >
          Delete
        </button>
      </div>
    </li>
  )
}

TaskItem.propTypes = {
  task: PropTypes.shape({
    id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
    text: PropTypes.string.isRequired,
    completed: PropTypes.bool.isRequired
  }).isRequired,
  onDelete: PropTypes.func.isRequired,
  onToggle: PropTypes.func.isRequired,
  onEdit: PropTypes.func.isRequired
}

export default TaskItem
