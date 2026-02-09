import React, { useState } from 'react';

function TaskItem({ task, index, onToggleComplete, onDeleteTask, language = 'en' }) {
  const [isRemoving, setIsRemoving] = useState(false);
  const isTelugu = language === 'te';

  const formatDate = (dateStr) => {
    const date = new Date(dateStr);
    return date.toLocaleDateString('en-US', { weekday: 'short', year: 'numeric', month: 'short', day: 'numeric' });
  };

  const handleDelete = () => {
    setIsRemoving(true);
    setTimeout(() => {
      onDeleteTask(task.id);
    }, 220);
  };

  const groupLabel = () => {
    if (!isTelugu) return task.group;
    const map = {
      Work: 'పని',
      Personal: 'వ్యక్తిగతం',
      Health: 'ఆరోగ్యం',
      Shopping: 'షాపింగ్',
      General: 'సాధారణం',
      Other: 'ఇతరాలు'
    };
    return map[task.group] || task.group;
  };

  return (
    <div 
      className={`task-item ${task.completed ? 'completed' : ''} ${isRemoving ? 'removing' : ''}`}
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
              <span className={`task-group-badge ${String(task.group).toLowerCase()}`}>{groupLabel()}</span>
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
          onClick={handleDelete}
          aria-label="Delete task"
        >
          ×
        </button>
      </div>
    </div>
  );
}

export default TaskItem;