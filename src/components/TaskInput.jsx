import React, { useState, useEffect } from 'react';

function TaskInput({ onAddTask, onClose }) {
  const [inputValue, setInputValue] = useState('');
  const [taskDate, setTaskDate] = useState(new Date().toISOString().split('T')[0]);
  const [taskGroup, setTaskGroup] = useState('General');

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Prevent empty task submission
    if (inputValue.trim() === '') {
       return;
    }

    onAddTask(inputValue.trim(), taskDate, taskGroup);
    setInputValue('');
    setTaskDate(new Date().toISOString().split('T')[0]);
    setTaskGroup('General');
    // Close panel after add
    if (typeof onClose === 'function') onClose();
  };

  useEffect(() => {
    // focus the main input when component mounts
    const el = document.querySelector('.task-panel .task-input');
    if (el) el.focus();
  }, []);

  return (
    <div className="task-panel" role="dialog" aria-modal="true">
      <form className="task-input-container panel-form" onSubmit={handleSubmit}>
        <div className="input-group">
          <input
            type="text"
            className="task-input"
            placeholder="What needs to be done?"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
          />
        </div>
        
        <div className="input-group">
          <input
            type="date"
            className="task-date"
            value={taskDate}
            onChange={(e) => setTaskDate(e.target.value)}
          />
          <select
            className="task-group"
            value={taskGroup}
            onChange={(e) => setTaskGroup(e.target.value)}
          >
            <option value="General">General</option>
            <option value="Work">Work</option>
            <option value="Personal">Personal</option>
          </select>
        </div>

        <div className="panel-actions">
          <button type="button" className="cancel-button" onClick={() => typeof onClose === 'function' && onClose()}>
            Cancel
          </button>
          <button type="submit" className="add-button save-button">
            Save Task
          </button>
        </div>
      </form>
    </div>
  );
}

export default TaskInput;