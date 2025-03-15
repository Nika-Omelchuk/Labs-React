import React, { createContext, useState, useEffect } from 'react';

export const TaskContext = createContext();

export const TaskProvider = ({ children }) => {
  const [tasks, setTasks] = useState(() => {
    const localData = localStorage.getItem('tasks');
    return localData ? JSON.parse(localData) : [];
  });
  
  const [theme, setTheme] = useState('light');

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);

  return (
    <TaskContext.Provider value={{ tasks, setTasks, theme, setTheme }}>
      {children}
    </TaskContext.Provider>
  );
};
