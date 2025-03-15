import React, { useContext, useCallback } from 'react';
import { TaskContext } from './TaskContext.jsx';

const ThemeSwitcher = () => {
  const { theme, setTheme } = useContext(TaskContext);

  const toggleTheme = useCallback(() => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  }, [theme, setTheme]);

  return (
    <button className="theme-switcher-button" onClick={toggleTheme}>
      {theme === 'light' ? 'Темна тема' : 'Світла тема'}
    </button>
  );
};

export default ThemeSwitcher;
