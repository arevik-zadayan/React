import React, {useContext} from 'react';
import Button from "../../../../../../UI/Button/Button";
import TitleArrow from "../../../../../../UI/titleArrow/TitleArrow";
import {StepContext} from "../../../../../../../context/stepContext";
import Input from "../../../../../../UI/Input/Input";
import SelectBtn from "../../../../../../UI/Select/select";
import "./Step1.scss"
import StepSelect from "../../../../../../UI/stepSelect/StepSelect";

const Step1 = (props) => {
    const {setSliderBuy, setSliderSell, options, setValue, initialStateStep} = useContext(StepContext)

    const next = (e) => {
        e.preventDefault();
        props.nextStep();
    }

    const handleBack = () => {
        setSliderBuy(false);
        setSliderSell(false)
        setValue(initialStateStep)
    }

    return (
        <>
            <TitleArrow name={props.name}/>
            <SelectBtn options={options} />
            <StepSelect />
            <Input id="input" defaultValue='1' name='number' type='number' />
            <div className="step1_container">
                <Button onClick={handleBack} name="BACK" className="main_btn__arrows"/>
                <Button name="CONTINUE" className="main_btn__arrows second_btn" onClick={next}/>
            </div>
        </>
    );
};

export default Step1;