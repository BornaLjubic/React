import React, { useState } from 'react';
import { useParams } from 'react-router-dom';

export const Kategorija: React.FC = () => {
  const { naziv } = useParams<{ naziv: string }>(); 
  const [tasks, setTasks] = useState<string[]>([]);

  const handleAddTask = (newTask: string) => {
    setTasks([...tasks, newTask]);
  };

  return (
    <div className='todo-category'>
      <h2>ToDo lista za kategoriju: {naziv}</h2>
      <input
        type="text"
        placeholder="Dodaj novi zadatak"
        onKeyDown={(e) => {
          if (e.key === 'Enter' && e.currentTarget.value.trim()) {
            handleAddTask(e.currentTarget.value);
            e.currentTarget.value = '';
          }
        }}
      />
      <ul>
        {tasks.map((task, index) => (
          <li key={index}>{task}</li>
        ))}
      </ul>
    </div>
  );
};

export default Kategorija;