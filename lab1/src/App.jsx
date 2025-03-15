import React from 'react';
import { useContext } from 'react';
import { TaskContext } from './TaskContext.jsx';
import AddTask from './AddTask.jsx';
import TaskFilter from './TaskFilter.jsx';
import TaskList from './TaskList.jsx';
import ThemeSwitcher from './ThemeSwitcher.jsx'; 

const App = () => {
  const { theme } = useContext(TaskContext);
  return (
      <div className={`app-container ${theme}`}>
          <h1>Менеджер завдань</h1>
          <ThemeSwitcher /> 
          <AddTask />
          <div className={`task-filter`}>
          <TaskFilter />
          <TaskList />
          </div>
      </div>
  );
};

export default App;
