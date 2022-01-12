import React, {useContext, useState} from 'react';
import "./Input.scss"
import {StepContext} from "../../../context/stepContext";

const Input = ({placeholder, id, disabled, name, type}) => {
    const {anim, value, setValue} = useContext(StepContext)
    const handleInput = (e) => {
        const val = e.target.value;
        setValue({
            ...value,
            [e.target.name]: val
        });
    }

    return (
        <div className={`inputContainer ${anim ? 'fade' : ''}`}>
            <div className='btn__arrows'>
                <input
                    name={name}
                    id={id}
                    onChange={handleInput}
                    className='input'
                    maxLength="40"
                    value={value[name]}
                    type={type}
                    disabled={disabled ? "disabled" : ""}
                    placeholder={placeholder}/>
            </div>
        </div>
    );
};

export default Input;