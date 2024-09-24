import React from 'react';

const TaskItem = ({ task, toggleComplete, editTask, deleteTask }) => {
    return (
        <li>
            <input
                type="checkbox"
                checked={task.completed}
                onChange={() => toggleComplete(task.id)}
            />
            <span style={{ textDecoration: task.completed ? 'line-through' : 'none' }}>
                {task.title} - {task.description}
            </span>
            <button onClick={() => editTask(task.id)}>Edit</button>
            <button onClick={() => deleteTask(task.id)}>Delete</button>
        </li>
    );
};

export default TaskItem;
