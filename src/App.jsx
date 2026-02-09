import React, { useState, useEffect } from 'react';
import TaskInput from './components/TaskInput';
import TaskList from './components/TaskList';
import './App.css';

function App() {
  const [tasks, setTasks] = useState(() => {
    try {
      const raw = localStorage.getItem('tasks');
      return raw ? JSON.parse(raw) : [];
    } catch (e) {
      console.warn('Failed to parse tasks from localStorage', e);
      return [];
    }
  });
  const [showInput, setShowInput] = useState(false);

  // Persist tasks to localStorage whenever they change
  useEffect(() => {
    try {
      localStorage.setItem('tasks', JSON.stringify(tasks));
    } catch (e) {
      console.warn('Failed to save tasks to localStorage', e);
    }
  }, [tasks]);

  const addTask = (taskName, taskDate, taskGroup) => {
    const newTask = {
      id: Date.now(),
      name: taskName,
      date: taskDate || new Date().toISOString().split('T')[0],
      group: taskGroup || 'General',
      completed: false
    };
    setTasks(prev => [...prev, newTask]);
  };

  const toggleComplete = (id) => {
    setTasks(prev => prev.map(task => 
      task.id === id ? { ...task, completed: !task.completed } : task
    ));
  };

  const deleteTask = (id) => {
    setTasks(prev => prev.filter(task => task.id !== id));
  };

  const totalTasks = tasks.length;
  const completedTasks = tasks.filter(task => task.completed).length;

  return (
    <div className="app">
      <div className="container">
        <header className="header">
          <h1 className="title">My Tasks</h1>
          <p className="subtitle">Stay organized, stay productive</p>
        </header>

        <div className="stats">
          <div className="stat-card">
            <div className="stat-icon">📋</div>
            <span className="stat-number">{totalTasks}</span>
            <span className="stat-label">Total</span>
          </div>
          <div className="stat-card">
            <div className="stat-icon">✅</div>
            <span className="stat-number">{completedTasks}</span>
            <span className="stat-label">Completed</span>
          </div>
          <div className="stat-card">
            <div className="stat-icon">⏳</div>
            <span className="stat-number">{totalTasks - completedTasks}</span>
            <span className="stat-label">Pending</span>
          </div>
        </div>

        {/* Floating add button */}
        <button
          className="floating-add"
          onClick={() => setShowInput(true)}
          aria-label="Add task"
        >
          +
        </button>

        {showInput && (
          <TaskInput
            onAddTask={(name, date, group) => {
              addTask(name, date, group);
            }}
            onClose={() => setShowInput(false)}
          />
        )}

        <TaskList
          tasks={tasks}
          onToggleComplete={toggleComplete}
          onDeleteTask={deleteTask}
        />
      </div>
    </div>
  );
}

export default App;