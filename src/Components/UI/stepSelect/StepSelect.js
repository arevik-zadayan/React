import React, {useContext, useState} from 'react';
import "./StepSelect.scss"
import Select from "react-select";
import {StepContext} from "../../../context/stepContext";

const StepSelect = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [open, setOpen] = useState(false);
    const {anim, value, setValue, option} = useContext(StepContext);

    const handleChange = (selectedOption) => {
        setValue({
            ...value,
            ['select_amount']: selectedOption
        });
    };

    const handleOpen = () => {
        setOpen(!open)
    }

    const handleInput = (e) => {
        const val = e.target.value;
        setValue({
            ...value,
            [e.target.name]: val
        });
    }

    return (
        <div className={`step_select ${anim ? 'fade' : ''}`}>
            <div className={`btn__arrows`}>
                <input
                    type='number'
                    name='amount'
                    className='input'
                    onChange={handleInput}
                    value={value['amount']}
                />
                <div
                    className='select_container'
                    onClick={handleOpen}
                >
                    <div className='select_cont'>
                        <Select
                            className="crypto_select"
                            options={option}
                            value={value['select_amount']}
                            onChange={handleChange}
                            menuIsOpen={open}
                        />
                        <svg xmlns="http://www.w3.org/2000/svg" width="21.522" height="11.229"
                             viewBox="0 0 21.522 11.229">
                            <path id="Path_423" data-name="Path 423" d="M950.033,2380.608h21.522l-11.229,11.229"
                                  transform="translate(-950.033 -2380.608)" fill="#182e33"/>
                        </svg>
                    </div>
                    {open &&
                    <div className='blanket' onClick={() => setIsOpen(false)}/>
                    }
                </div>
            </div>
        </div>
    );
};

export default StepSelect;