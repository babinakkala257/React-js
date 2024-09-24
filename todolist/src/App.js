// src/App.js
import React, { useState } from 'react';
import TaskForm from './componentform';
import TaskList from './compentlist';
import './App.css'; 


const App = () => {
    const [tasks, setTasks] = useState([]);
    const [filter, setFilter] = useState('All');

    const addTask = (title, description) => {
        const newTask = { id: Date.now(), title, description, completed: false };
        setTasks([...tasks, newTask]);
    };

    const toggleComplete = (id) => {
        setTasks(tasks.map(task => 
            task.id === id ? { ...task, completed: !task.completed } : task
        ));
    };

    const editTask = (id) => {
        const title = prompt("New title:", "");
        const description = prompt("New description:", "");
        if (title !== null && description !== null) {
            setTasks(tasks.map(task => 
                task.id === id ? { ...task, title, description } : task
            ));
        }
    };

    const deleteTask = (id) => {
        setTasks(tasks.filter(task => task.id !== id));
    };

    return (
        <div>
            <h1>Todo List</h1>
            <TaskForm addTask={addTask} />
            <div>
                <button onClick={() => setFilter('All')}>All</button>
                <button onClick={() => setFilter('Active')}>Active</button>
                <button onClick={() => setFilter('Completed')}>Completed</button>
            </div>
            <TaskList 
                tasks={tasks} 
                toggleComplete={toggleComplete} 
                editTask={editTask} 
                deleteTask={deleteTask} 
                filter={filter} 
            />
        </div>
    );
};

export default App;
