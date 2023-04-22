import React, { useState } from 'react';
import Button from './Button';

import './AddTask.css';
// nesta props eu posso adicionar novas task
// estou passando meu handleTaskAddition(por props:handleTaskAddition) do PAI(APP.jsx) para o filho que é a AddTask
const AddTask = ({ handleTaskAddition }) => {
    const [inputData, setInputData] = useState('');

    // esta função, cada vez que eu clico no input, adicionar os valores novos
    const handleInputChange = (event) => {
        setInputData(event.target.value);
    };

    // quando o user clicar no botao adicionar
    const handleAddTaskClick = () => {
        handleTaskAddition(inputData);
        // deixo o input sempre vazio quando escrevo algo;
        setInputData("");
    };

    const handleKeyDown = (event) => {
        if (event.key === "Enter") {
            handleTaskAddition(inputData);
            setInputData("");
        }
    };


    return (
        <div className='add-task-container'>
            <input
                onChange={handleInputChange}
                onKeyDown={handleKeyDown}
                value={inputData}
                className='add-task-input'
                type="text" />

            <div className="add-task-button-container">
                <Button
                    onClick={handleAddTaskClick}
                >
                    Adicionar
                </Button>
            </div>
        </div>
    );
};

export default AddTask;