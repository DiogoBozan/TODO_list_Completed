import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';

import Button from './Button';

import "./TaskDetails.css";

const TaskDetails = () => {
    const navigate = useNavigate();

    const params = useParams();

    const handleBackButtonClick = () => {
        navigate(`/`);
    };

    const capitalizeWords = (str) => {
        return str
            .toLowerCase()
            .split(' ')
            .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
            .join(' ');
    };

    return (
        <>
            <div className="back-button-container">
                <Button onClick={handleBackButtonClick}>Voltar</Button>
            </div>
            <div className="task-details-container">
                <h2>{capitalizeWords(params.taskTitle)}</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Error eius quasi sequi tempora consectetur similique?</p>
            </div>
        </>
    );
};

export default TaskDetails;