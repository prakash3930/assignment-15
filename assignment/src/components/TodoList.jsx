import { useState, useEffect } from 'react';

const TodoListApp = () => {
  const [task, setTask] = useState('');
  const [tasksList, setTasksList] = useState(() => {
    const storedTasks = JSON.parse(localStorage.getItem('tasksList') || '[]');
    return storedTasks;
  });

  useEffect(() => {

    localStorage.setItem('tasksList', JSON.stringify(tasksList));
  }, [tasksList]);

  const handleAddTask = () => {
    if (task.trim() !== '') {
      setTasksList([...tasksList, task]);
      setTask('');
    }
  };

  const handleDeleteTask = (index) => {
    const updatedTasks = [...tasksList];
    updatedTasks.splice(index, 1);
    setTasksList(updatedTasks);
  };

  return (
    <div className='todo_app'>
      <h2>To-Do List App</h2>
        <span>
        <input
        type="text"
        value={task}
        onChange={(e) => setTask(e.target.value)}
        placeholder="Enter a new Data"
      />
      <button onClick={handleAddTask}>Add Data</button>
        </span>

      <ul>
        {tasksList.map((task, index) => (
          <li key={index}>
            {task}{' '}
            <button onClick={() => handleDeleteTask(index)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoListApp;
