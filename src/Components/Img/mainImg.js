import React from 'react';
import  "./mainImg.scss";

const MainImg = ({img,className}) => {
    return (
        <div className={`block__img ${className}`}>
            <img src={img} alt=""/>

        </div>
    );
};

export default MainImg;