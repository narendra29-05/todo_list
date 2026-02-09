import React from 'react';

function TaskItem({ task, index, onToggleComplete, onDeleteTask }) {
  const formatDate = (dateStr) => {
    const date = new Date(dateStr);
    return date.toLocaleDateString('en-US', { weekday: 'short', year: 'numeric', month: 'short', day: 'numeric' });
  };

  return (
    <div 
      className={`task-item ${task.completed ? 'completed' : ''}`}
      style={{ animationDelay: `${index * 0.05}s` }}
    >
      <div className="task-content">
        <div className="task-checkbox-container">
          <input
            type="checkbox"
            id={`task-${task.id}`}
            className="task-checkbox"
            checked={task.completed}
            onChange={() => onToggleComplete(task.id)}
          />
          <label htmlFor={`task-${task.id}`} className="checkbox-custom"></label>
        </div>
        <div className="task-details">
          <span className="task-name">{task.name}</span>
          <div className="task-meta">
            {task.date && <span className="task-date-badge">📅 {formatDate(task.date)}</span>}
            {task.group && (
              <span className={`task-group-badge ${String(task.group).toLowerCase()}`}>{task.group}</span>
            )}
          </div>
        </div>
      </div>
      
      <div className="task-actions">
        <button
          className="complete-button"
          onClick={() => onToggleComplete(task.id)}
          aria-label={task.completed ? "Mark as incomplete" : "Mark as completed"}
        >
          {task.completed ? '↺' : '✓'}
        </button>
        <button
          className="delete-button"
          onClick={() => onDeleteTask(task.id)}
          aria-label="Delete task"
        >
          ×
        </button>
      </div>
    </div>
  );
}

export default TaskItem;