import React, {useContext, useState} from 'react';
import "./Exchange.scss"
import Select from "react-select";
import {StepContext} from "../../../context/stepContext";

const Input = ({placeholder, id, disabled, options, inpValue, currencyName, selectValue,type}) => {
    const {initialState, setState} = useContext(StepContext);
    const [isOpen, setIsOpen] = useState(false);
    const [value, setValue] = useState(options[0]);

    const toggleOpen = () => {
        setIsOpen(!isOpen);
    };

    const onSelectChange = value => {
        toggleOpen();
        setValue(value);
        setState({
            ...initialState,
            [currencyName]: value.value,
            result: null,
        });
    };

    const handleInput = (e) => {
        setState({
            ...initialState,
            amount: e.target.value,
            result: null,
            date: null,
        });
    }

    const Svg = p => (
        <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            focusable="false"
            role="presentation"
            {...p}
        />
    );

    const DropdownIndicator = () => (
        <div className='icon'>
            <Svg>
                <path
                    d="M16.436 15.085l3.94 4.01a1 1 0 0 1-1.425 1.402l-3.938-4.006a7.5 7.5 0 1 1 1.423-1.406zM10.5 16a5.5 5.5 0 1 0 0-11 5.5 5.5 0 0 0 0 11z"
                    fill="currentColor"
                    fillRule="evenodd"
                />
            </Svg>
        </div>
    );

    return (
        <div className='exchange_btn'>
            <div className={!isOpen ? `btn__arrows` : `btn__arrows opened`}>
                <input
                    id={id}
                    className='input'
                    type={type}
                    disabled={disabled ? "disabled" : ""}
                    placeholder={placeholder}
                    onChange={handleInput}
                    value={inpValue}
                    onInput = {(e) =>{
                        e.target.value = Math.max(0, parseInt(e.target.value) ).toString().slice(0,12)
                    }}
                />
                <div className='select_container'>
                    <div className="select_block"
                         onClick={toggleOpen}
                         isSelected={isOpen}>
                        {value ? `${selectValue}` : 'Select a State'}
                        <svg xmlns="http://www.w3.org/2000/svg" width="21.522" height="11.229"
                             viewBox="0 0 21.522 11.229">
                            <path id="Path_423" data-name="Path 423" d="M950.033,2380.608h21.522l-11.229,11.229"
                                  transform="translate(-950.033 -2380.608)" fill="#182e33"/>
                        </svg>
                    </div>
                    {isOpen &&
                    <>
                        <div className='select_cont'>
                            <Select
                                className="crypto_select"
                                defaultValue={[options[0]]}
                                components={{DropdownIndicator, IndicatorSeparator: null}}
                                options={options}
                                onChange={onSelectChange}
                                menuIsOpen={true}
                                placeholder="Search..."
                                tabSelectsValue={false}
                                value={value}
                                controlShouldRenderValue={false}
                                hideSelectedOptions={false}
                                isClearable={false}
                            />
                        </div>
                        <div className='blanket' onClick={() => setIsOpen(false)}/>
                    </>
                    }
                </div>
            </div>
        </div>
    );
};

export default Input;