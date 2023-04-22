import React from 'react';

import './Button.css';

// a prop children deixa eu criar varios Button com nomes diferentes. ex: adicionar, remover, somar...
const Button = ({ children, onClick }) => {
    return (
        <button onClick={onClick} className='button'>
            {children}
        </button>
    );
};

export default Button;