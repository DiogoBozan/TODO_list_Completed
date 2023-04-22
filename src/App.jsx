import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import ListTasks from './components/ListTasks';
import AddTask from './components/AddTask';
import Header from './components/Header';
import TaskDetails from './components/TaskDetails';

import './App.css';

function App() {
  const [tarefas, setTasks] = useState([
    // valores iniciais sempre que nao tenho nada na lista;
    {
      id: "1",
      title: 'Estudar Programação',
      completed: false,
    },
    {
      id: "2",
      title: 'Ler Livros',
      completed: true,
    }
  ]);

  const handleTaskClick = (taskId) => {
    const newTasks = tarefas.map(task => {
      if (task.id === taskId) return { ...task, completed: !task.completed };

      return task;
    });
    setTasks(newTasks);
  };

  const handleTaskRemove = (taskId) => {
    const removeTask = tarefas.filter(task => {
      return task.id !== taskId;
    });
    setTasks(removeTask);
  };


  // este metodo adicionar as tarefas
  const handleTaskAddition = (taskTitle) => {
    const newTasks = [
      ...tarefas, {
        title: taskTitle,
        id: uuidv4(),
        completed: false,
      },
    ];
    setTasks(newTasks);
  };


  return (
    <Router>
      <div className='container'>
        <Header />
        <Routes>
          <Route
            path="/"
            element={
              <>
                <AddTask
                  handleTaskAddition={handleTaskAddition}
                />
                <ListTasks
                  listTasks={tarefas}
                  handleTaskClick={handleTaskClick}
                  handleTaskRemove={handleTaskRemove}
                />
              </>
            }
          />
          < Route
            path="/:taskTitle"
            element={<TaskDetails />}
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
