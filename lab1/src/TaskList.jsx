import React, { useContext, useMemo } from 'react';
import { TaskContext } from './TaskContext.jsx';
import { FilterContext } from './FilterContext.jsx';
import TaskItem from './TaskItem.jsx';

const TaskList = () => {
  const { tasks } = useContext(TaskContext);
  const { filter } = useContext(FilterContext);

  const filteredTasks = useMemo(() => {
    switch (filter) {
      case 'active':
        return tasks.filter(task => !task.completed);
      case 'completed':
        return tasks.filter(task => task.completed);
      default:
        return tasks;
    }
  }, [tasks, filter]);

  return (
    <ul>
      {filteredTasks.map(task => (
        <TaskItem key={task.id} task={task} />
      ))}
    </ul>
  );
};

export default TaskList;
