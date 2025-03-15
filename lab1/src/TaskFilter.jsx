import React, { useContext, useCallback } from 'react';
import { FilterContext } from './FilterContext.jsx';

const TaskFilter = () => {
  const { filter, setFilter } = useContext(FilterContext);

  const handleFilterChange = useCallback((newFilter) => {
    setFilter(newFilter);
  }, [setFilter]);

  return (
    <div>
      <button
        onClick={() => handleFilterChange('all')}
        disabled={filter === 'all'}
      >
        Всі
      </button>
      <button
        onClick={() => handleFilterChange('active')}
        disabled={filter === 'active'}
      >
        Активні
      </button>
      <button
        onClick={() => handleFilterChange('completed')}
        disabled={filter === 'completed'}
      >
        Виконані
      </button>
    </div>
  );
};

export default TaskFilter;
