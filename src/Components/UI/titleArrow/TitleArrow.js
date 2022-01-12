import React, {useContext} from 'react';
import "./TitleArrow.scss"
import {StepContext} from "../../../context/stepContext";

const TitleArrow = ({name, className}) => {
    const {anim} = useContext(StepContext)

    return (
        <div className={`btn__arrow ${className}`}>
            <span className={`${anim ? 'step_anim' : ''}`}>
                {name}
            </span>
        </div>
    );
};

export default TitleArrow;