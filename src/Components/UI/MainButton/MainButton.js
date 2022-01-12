import React from 'react';
import "./MainButton.scss"

const MainButton = ({name, className, onClick}) => {
    return (
        <div
            onClick={onClick}
            className={`warn ${className}`}
        >
            {name}
        </div>
    );
};

export default MainButton;