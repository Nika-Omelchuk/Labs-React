import React, { useState, useContext, useRef, useCallback } from 'react';
import { TaskContext } from './TaskContext.jsx';

const AddTask = () => {
  const { tasks, setTasks } = useContext(TaskContext);
  const [taskText, setTaskText] = useState('');
  const inputRef = useRef(null);

  const handleAddTask = useCallback((e) => {
    e.preventDefault();
    if (taskText.trim() === '') return;

    const newTask = {
      id: Date.now(),
      text: taskText,
      completed: false,
    };

   setTasks([...tasks, newTask]);
    setTaskText('');
   inputRef.current.focus();
  }, [taskText, tasks, setTasks]);

  return (
    <form onSubmit={handleAddTask}>
      <input
        type="text"
        ref={inputRef}
        value={taskText}
        onChange={(e) => setTaskText(e.target.value)}
        placeholder="Введіть нове завдання"
      />
      <button type="submit">Додати</button>
    </form>
  );
};

export default AddTask;
