import React, { FC, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { TodoList } from '../Todo';
import "./WelcomePage.scss"
export const WelcomePage: FC = () => {
  const [tasks, setTasks] = useState<string[]>([]);
  const [newTask, setNewTask] = useState('');
  const navigate = useNavigate();

  const handleAddTask = () => {
    if (newTask.trim()) {
      setTasks([...tasks, newTask]);
      setNewTask('');
    }
  };

  const handleTaskClick = (task: string) => {
    navigate(`/kategorija/${task}`);
  };

  return (
    <div>
      <section className='todo-category'>
        <h1>Todo Categories</h1>
        <input
          type="text"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
          className="task-input"
          placeholder="Unesi novi zadatak"
        />
        <button onClick={handleAddTask} className="task-button">Dodaj zadatak</button>
        <ul>
          {tasks.map((task, index) => (
            <li key={index} className="task-item">
              <button onClick={() => handleTaskClick(task)} className="category-button">
                {task}
              </button>
            </li>
          ))}
        </ul>
      </section>

      

    </div>
  );
};

export default WelcomePage;