import TaskItem from './TaskItem'
import PropTypes from 'prop-types'

function TaskList({ tasks, onDeleteTask, onToggleTask, onEditTask }) {
  if (tasks.length === 0) {
    return (
      <div className="empty-state">
        No tasks yet. Add one above to get started!
      </div>
    )
  }

  return (
    <ul className="task-list">
      {tasks.map(task => (
        <TaskItem
          key={task.id}
          task={task}
          onDelete={onDeleteTask}
          onToggle={onToggleTask}
          onEdit={onEditTask}
        />
      ))}
    </ul>
  )
}

TaskList.propTypes = {
  tasks: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
      text: PropTypes.string.isRequired,
      completed: PropTypes.bool.isRequired
    })
  ).isRequired,
  onDeleteTask: PropTypes.func.isRequired,
  onToggleTask: PropTypes.func.isRequired,
  onEditTask: PropTypes.func.isRequired
}

export default TaskList
