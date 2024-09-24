import React, { useState, useEffect } from 'react';
import TaskForm from './taskform';
import TaskList from './tasklist';
import './App.css';

const App = () => {
  const [tasks, setTasks] = useState([]);
  const [filter, setFilter] = useState('all'); 

  useEffect(() => {
    const savedTasks = JSON.parse(localStorage.getItem('tasks'));
    if (savedTasks) setTasks(savedTasks);
  }, []);

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);

  const addTask = (title, description) => {
    const newTask = { title, description, completed: false };
    setTasks([...tasks, newTask]);
  };

  const markComplete = (index) => {
    const newTasks = [...tasks];
    newTasks[index].completed = true;
    setTasks(newTasks);
  };

  const markIncomplete = (index) => {
    const newTasks = [...tasks];
    newTasks[index].completed = false;
    setTasks(newTasks);
  };

  const deleteTask = (index) => {
    const newTasks = [...tasks];
    newTasks.splice(index, 1);
    setTasks(newTasks);
  };

  
  const filteredTasks = tasks.filter((task) => {
    if (filter === 'completed') return task.completed;
    if (filter === 'incomplete') return !task.completed;
    return true;
  });

  return (
    <div className="app-container">
      <h1>Task Tracker</h1>
      <TaskForm addTask={addTask} />
      
      
      <div className="filter-buttons">
        <button onClick={() => setFilter('all')} className={filter === 'all' ? 'active' : ''}>All</button>
        <button onClick={() => setFilter('completed')} className={filter === 'completed' ? 'active' : ''}>Completed</button>
        <button onClick={() => setFilter('incomplete')} className={filter === 'incomplete' ? 'active' : ''}>Incomplete</button>
      </div>

      <TaskList
        tasks={filteredTasks}
        markComplete={markComplete}
        markIncomplete={markIncomplete}
        deleteTask={deleteTask}
      />
    </div>
  );
};

export default App;
