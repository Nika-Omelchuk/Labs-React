import React, { useState, useContext, useCallback } from 'react';
import { TaskContext } from './TaskContext.jsx';

const TaskItem = ({ task }) => {
  const { tasks, setTasks } = useContext(TaskContext);
  const [isEditing, setIsEditing] = useState(false);
  const [editedText, setEditedText] = useState(task.text);

  const handleDelete = useCallback(() => {
    setTasks(tasks.filter(t => t.id !== task.id));
  }, [tasks, setTasks, task.id]);

  const handleToggleComplete = useCallback(() => {
    setTasks(
      tasks.map(t =>
        t.id === task.id ? { ...t, completed: !t.completed } : t
      )
    );
  }, [tasks, setTasks, task.id]);

  const handleEditSave = useCallback(() => {
    setTasks(
      tasks.map(t =>
        t.id === task.id ? { ...t, text: editedText } : t
      )
    );
    setIsEditing(false);
  }, [tasks, setTasks, task.id, editedText]);

  return (
    <li className="task-item">
      <div className="task-text">
        {isEditing ? (
          <input
            type="text"
            value={editedText}
            onChange={(e) => setEditedText(e.target.value)}
          />
        ) : (
          <span style={{ textDecoration: task.completed ? 'line-through' : 'none' }}>
            {task.text}
          </span>
        )}
      </div>
      <div className="task-button-row">
        <div className="left-buttons">
          <button className="task-complete-button" onClick={handleToggleComplete}>
            {task.completed ? 'Не виконано' : 'Виконано'}
          </button>
        </div>
        <div className="right-buttons">
          {isEditing ? (
            <button className="task-edit-button" onClick={handleEditSave}>Зберегти</button>
          ) : (
            <button className="task-edit-button" onClick={() => setIsEditing(true)}>Редагувати</button>
          )}
          <button className="task-delete-button" onClick={handleDelete}>Видалити</button>
        </div>
      </div>
    </li>
  );
};

TaskItem.defaultProps = {
  task: {
    id: 0,
    text: 'Завдання за замовчуванням',
    completed: false,
  },
};

export default TaskItem;
