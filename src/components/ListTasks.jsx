import React from 'react';
import Task from './Task';

//{tasks} esta sendo destructer
// estou passando meu useState(por props:listTasks) do PAI(APP.jsx) para o filho que é a ListTasks.
const ListTasks = ({ listTasks, handleTaskClick, handleTaskRemove }) => {
    console.log("renderizando");
    return (
        <>

            {listTasks.map(singleTask => <Task singleTask={singleTask} key={singleTask.id} handleTaskClick={handleTaskClick} handleTaskRemove={handleTaskRemove} />)}
        </>
    );
};

export default ListTasks;