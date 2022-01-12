import React, {useContext} from 'react';
import Button from "../../../../../../UI/Button/Button";
import TitleArrow from "../../../../../../UI/titleArrow/TitleArrow";
import {StepContext} from "../../../../../../../context/stepContext";
import "./Step3.scss"
import StepContent from "../StepContent_3_4/StepContent";

const Step3 = (props) => {
    const {setImage, setImgAnim, setStep3Anim, setCountStart} = useContext(StepContext)

    const next = (e) => {
        e.preventDefault();
        props.nextStep();
        setImage(true);
        setImgAnim(true);
        setStep3Anim(false)
        setCountStart(false)
        setTimeout(() => {
            setImgAnim(false)
        }, 1000);
    }

    const prev = (e) => {
        e.preventDefault();
        props.prevStep();
    }

    return (
        <>
            <TitleArrow name={props.name}/>
            <StepContent/>
            <div className="step3_btn_container">
                <Button name="BACK" className="main_btn__arrows" onClick={prev}/>
                <Button name="TRANSFERRED" className="main_btn__arrows second_btn" onClick={next}/>
            </div>
        </>
    );
};

export default Step3;