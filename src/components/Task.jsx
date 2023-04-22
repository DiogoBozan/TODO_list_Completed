import React from 'react';
import { useNavigate } from 'react-router-dom';

import { CgClose, CgInfo } from "react-icons/cg";

import './Task.css';

// a singleTask é a prop do componente Task.
const Task = ({ singleTask, handleTaskClick, handleTaskRemove }) => {
    const navigate = useNavigate();

    const handleTaskDetaisClick = () => {
        navigate(`/${singleTask.title}`);
    };

    return (

        <div className="task-container" style={singleTask.completed ? { borderLeft: '6px solid chartreuse' } : {}}
        >
            <div
                className="task-title"
                onClick={() => handleTaskClick(singleTask.id)}>
                {singleTask.title}
            </div>

            <div className="buttons-container">

                <button className='remove-task-button'
                    onClick={() => handleTaskRemove(singleTask.id)}
                >
                    <CgClose />
                </button>

                <button className='see-task-details-button'
                    onClick={handleTaskDetaisClick}>
                    <CgInfo />
                </button>
            </div>
        </div>
        // <div className="task-container">
        //     {singleTask.title}
        // </div>
    );
};

export default Task;