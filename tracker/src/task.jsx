import React, { useState } from 'react';
import './task.css';

const Task = ({ task, index, markComplete, markIncomplete, deleteTask }) => {
  const [showModal, setShowModal] = useState(false);

  const confirmDelete = () => {
    deleteTask(index);
    setShowModal(false);
  };

  return (
    <div className={`task ${task.completed ? 'completed' : 'incomplete'}`}>
      <h3>{task.title}</h3>
      <p>{task.description}</p>

      {task.completed ? (
        <button onClick={() => markIncomplete(index)} className="incomplete-btn">
          Mark Incomplete
        </button>
      ) : (
        <button onClick={() => markComplete(index)} className="complete-btn">
          Mark Complete
        </button>
      )}

      <button onClick={() => setShowModal(true)} className="delete-btn">
        Delete
      </button>

      
      {showModal && (
        <div className="modal">
          <p>Are you sure you want to delete this task?</p>
          <button onClick={confirmDelete} className="delete-btn">Yes</button>
          <button onClick={() => setShowModal(false)} className="cancel-btn">No</button>
        </div>
      )}
    </div>
  );
};

export default Task;
