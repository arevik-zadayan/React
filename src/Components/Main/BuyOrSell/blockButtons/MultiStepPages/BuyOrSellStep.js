import React, {useContext, useState} from 'react';
import Step1 from "./Steps/Step1/Step1";
import Step2 from "./Steps/Step2/Step2";
import Step3 from "./Steps/Step3/Step3";
import Step4 from "./Steps/Step4/Step4";
import {StepContext} from "../../../../../context/stepContext";

const BuyOrSellStep = ({stepTitle1,stepTitle2,stepTitle3,stepTitle4}) => {

    const {step,setStep,setAnim}=useContext(StepContext)
    const nextStep = () => {
        setStep(step + 1);
        setAnim(true);
        setTimeout(() => {
            setAnim(false)
        }, 1000);
    }

    const prevStep = () => {
        setStep(step - 1);
        setAnim(true);
        setTimeout(() => {
            setAnim(false)
        }, 1000);
    }
    const  showStep = () => {
        if(step === 1)
            return (<Step1
                nextStep = {nextStep}
                name={stepTitle1}
            />);
        if(step === 2)
            return (<Step2
                nextStep = {nextStep}
                prevStep = {prevStep}
                name={stepTitle2}
            />);
        if(step === 3)
            return (<Step3
                nextStep = {nextStep}
                prevStep = {prevStep}
                name={stepTitle3}
            />);
        if(step === 4)
            return (<Step4
                prevStep = {prevStep}
                name={stepTitle4}
            />);
    }

    return(
        <>
            {showStep()}
        </>
    );
};

export default BuyOrSellStep;