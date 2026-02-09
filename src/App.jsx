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
  const [theme, setTheme] = useState('biscuit'); // 'biscuit' | 'blue' | 'violet' | 'coffee'
  const [language, setLanguage] = useState('en'); // 'en' | 'te'

  const cycleTheme = () => {
    setTheme((prev) => {
      if (prev === 'biscuit') return 'blue';
      if (prev === 'blue') return 'violet';
      if (prev === 'violet') return 'coffee';
      return 'biscuit';
    });
  };

  const toggleLanguage = () => {
    setLanguage((prev) => (prev === 'en' ? 'te' : 'en'));
  };

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

  const isTelugu = language === 'te';
  const titleText = isTelugu ? 'నా పనులు' : 'My Tasks';
  const subtitleText = isTelugu ? 'వ్యవస్థబద్ధంగా ఉండండి, ఫలవంతంగా ఉండండి' : 'Stay organized, stay productive';
  const totalLabel = isTelugu ? 'మొత్తం' : 'Total';
  const completedLabel = isTelugu ? 'పూర్తయ్యినవి' : 'Completed';
  const pendingLabel = isTelugu ? 'మిగిలినవి' : 'Pending';

  return (
    <div className={`app theme-${theme}`}>
      <div className="container">
        <header className="header">
          <div className="header-controls">
            <button
              className="theme-toggle"
              type="button"
              onClick={cycleTheme}
              aria-label="Change theme"
            >
              🎨
            </button>
            <button
              className="language-toggle"
              type="button"
              onClick={toggleLanguage}
              aria-label="Toggle language"
            >
              {isTelugu ? 'A' : 'అ'}
            </button>
          </div>
          <h1 className="title">{titleText}</h1>
          <p className="subtitle">{subtitleText}</p>
        </header>

        <div className="stats">
          <div className="stat-card">
            <div className="stat-icon">📋</div>
            <span className="stat-number">{totalTasks}</span>
            <span className="stat-label">{totalLabel}</span>
          </div>
          <div className="stat-card">
            <div className="stat-icon">✅</div>
            <span className="stat-number">{completedTasks}</span>
            <span className="stat-label">{completedLabel}</span>
          </div>
          <div className="stat-card">
            <div className="stat-icon">⏳</div>
            <span className="stat-number">{totalTasks - completedTasks}</span>
            <span className="stat-label">{pendingLabel}</span>
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
            language={language}
            onAddTask={(name, date, group) => {
              addTask(name, date, group);
            }}
            onClose={() => setShowInput(false)}
          />
        )}

        <TaskList
          tasks={tasks}
          language={language}
          onToggleComplete={toggleComplete}
          onDeleteTask={deleteTask}
        />
      </div>
    </div>
  );
}

export default App;