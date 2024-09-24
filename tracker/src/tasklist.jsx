import React from 'react';
import Task from './task';
import './tasklist.css';

const TaskList = ({ tasks, markComplete, markIncomplete, deleteTask }) => {
  return (
    <div className="task-list">
      {tasks.length > 0 ? (
        tasks.map((task, index) => (
          <Task
            key={index}
            task={task}
            index={index}
            markComplete={markComplete}
            markIncomplete={markIncomplete}
            deleteTask={deleteTask}
          />
        ))
      ) : (
        <p>No tasks added yet!</p>
      )}
    </div>
  );
};

export default TaskList;
