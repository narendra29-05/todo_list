import React, { useState } from 'react';
import TaskItem from './TaskItem';

function TaskList({ tasks, onToggleComplete, onDeleteTask }) {
  const [groupBy, setGroupBy] = useState('date'); // 'date' or 'group'

  if (tasks.length === 0) {
    return (
      <div className="empty-state">
        <div className="empty-icon">📝</div>
        <p className="empty-text">No tasks yet. Add one to get started!</p>
      </div>
    );
  }

  const formatDate = (dateStr) => {
    const date = new Date(dateStr);
    return date.toLocaleDateString('en-US', { weekday: 'short', year: 'numeric', month: 'short', day: 'numeric' });
  };

  const groupTasksByDate = () => {
    const grouped = {};
    tasks.forEach(task => {
      const date = task.date || new Date().toISOString().split('T')[0];
      if (!grouped[date]) {
        grouped[date] = [];
      }
      grouped[date].push(task);
    });
    return grouped;
  };

  const groupTasksByGroup = () => {
    const grouped = {};
    tasks.forEach(task => {
      const group = task.group || 'General';
      if (!grouped[group]) {
        grouped[group] = [];
      }
      grouped[group].push(task);
    });
    return grouped;
  };

  const sortedGroups = (grouped) => {
    if (groupBy === 'date') {
      return Object.keys(grouped).sort();
    } else {
      const order = ['Work', 'Personal', 'Health', 'Shopping', 'General', 'Other'];
      return Object.keys(grouped).sort((a, b) => order.indexOf(a) - order.indexOf(b));
    }
  };

  const groups = groupBy === 'date' ? groupTasksByDate() : groupTasksByGroup();
  const sorted = sortedGroups(groups);

  return (
    <div className="task-list-wrapper">
      <div className="group-toggle">
        <button 
          className={`toggle-btn ${groupBy === 'date' ? 'active' : ''}`}
          onClick={() => setGroupBy('date')}
        >
          📅 By Date
        </button>
        <button 
          className={`toggle-btn ${groupBy === 'group' ? 'active' : ''}`}
          onClick={() => setGroupBy('group')}
        >
          🏷️ By Category
        </button>
      </div>

      <div className="task-list">
        {sorted.map((groupKey, idx) => (
          <div key={groupKey} className="task-group-section">
            <h3 className="group-title">
              {groupBy === 'date' ? formatDate(groupKey) : groupKey}
              <span className="group-count">{groups[groupKey].length}</span>
            </h3>
            <div className="group-items">
              {groups[groupKey].map((task, index) => (
                <TaskItem
                  key={task.id}
                  task={task}
                  index={index}
                  onToggleComplete={onToggleComplete}
                  onDeleteTask={onDeleteTask}
                />
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default TaskList;