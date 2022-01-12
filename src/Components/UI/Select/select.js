import React, {useContext, useState} from 'react';
import Select from 'react-select';
import "./select.scss"
import {StepContext} from "../../../context/stepContext";

const SelectBtn = ({options, usd}) => {

    const [isOpen, setIsOpen] = useState(false);
    const {anim, setValue, value} = useContext(StepContext)

    const toggleOpen = () => {
        setIsOpen(!isOpen);
    };

    const onSelectChange = selectedOption => {
        toggleOpen();
        setValue({
            ...value,
            ['select_coin']: selectedOption
        });
    };

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
        <div className={`select_container ${anim ? 'fade' : ''}`}>
            <div className={!isOpen ? `btn__arrows` : `btn__arrows opened`}
                 onClick={toggleOpen}
                 isSelected={isOpen}>
                {value ? `${value['select_coin'].label}` : 'btc'}
                <div className="currency_name">
                    <p>{usd}</p>
                    <svg xmlns="http://www.w3.org/2000/svg" width="21.522" height="11.229" viewBox="0 0 21.522 11.229">
                        <path id="Path_423" data-name="Path 423" d="M950.033,2380.608h21.522l-11.229,11.229"
                              transform="translate(-950.033 -2380.608)" fill="#182e33"/>
                    </svg>
                </div>
            </div>
            {isOpen &&
            <>
                <div className='select_cont'>
                    <Select
                        className="crypto_select"
                        components={{DropdownIndicator, IndicatorSeparator: null}}
                        options={options}
                        onChange={onSelectChange}
                        menuIsOpen={true}
                        placeholder="Search..."
                        tabSelectsValue={false}
                        value={value['select_coin']}
                        controlShouldRenderValue={false}
                        hideSelectedOptions={false}
                        isClearable={false}
                    />
                </div>
                <div className='blanket' onClick={() => setIsOpen(false)}/>
            </>
            }
        </div>
    );
};

export default SelectBtn;