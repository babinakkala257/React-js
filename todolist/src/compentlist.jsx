import React from 'react';
import TaskItem from './componentitem';

const TaskList = ({ tasks, toggleComplete, editTask, deleteTask, filter }) => {
    const filteredTasks = filter === 'All'
        ? tasks
        : tasks.filter(task => task.completed === (filter === 'Completed'));

    return (
        <ul>
            {filteredTasks.map(task => (
                <TaskItem
                    key={task.id}
                    task={task}
                    toggleComplete={toggleComplete}
                    editTask={editTask}
                    deleteTask={deleteTask}
                />
            ))}
        </ul>
    );
};

export default TaskList;
