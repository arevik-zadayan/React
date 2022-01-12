import React from 'react';
import "./Button.scss"

const Button = ({name, className, onClick}) => {
    return (
        <button
            onClick={onClick}
            className={`btn__arrows ${className}`}
        >
            {name}
        </button>
    );
};

export default Button;