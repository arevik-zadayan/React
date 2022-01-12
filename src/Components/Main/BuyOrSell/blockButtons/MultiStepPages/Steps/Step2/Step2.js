import React, {useContext, useState} from 'react';
import Button from "../../../../../../UI/Button/Button";
import TitleArrow from "../../../../../../UI/titleArrow/TitleArrow";
import Input from "../../../../../../UI/Input/Input";
import idram from "../../../../../../../Img/idram.png"
import visa from "../../../../../../../Img/visa.png"
import easypay from "../../../../../../../Img/easypay.png"
import mastercard from "../../../../../../../Img/mastercard.png"
import {StepContext} from "../../../../../../../context/stepContext";
import "./Step2.scss"

const Step2 = (props) => {
    const {sliderBuy, sliderSell, anim, setStep3Anim, setValue, value} = useContext(StepContext)
    // const [method, setMethod] = useState({});

    const next = (e) => {
        e.preventDefault();
        props.nextStep();
        setStep3Anim(true)
        setTimeout(() => {
            setStep3Anim(true)
        }, 1000);
    }

    const prev = (e) => {
        e.preventDefault();
        props.prevStep();
    }

    const handlePayment = (id) => {
        setValue({
            ...value,
            ['method']: {[id]: true}
        });
        // setMethod({[id]: true})
        // setMethod(prevState => ({...prevState, [id]: true}));

    }

    return (
        <>
            <TitleArrow name={props.name}/>
            {sliderBuy &&
            <div className="input_block">
                <Input id="input" placeholder="Enter your crypto wallet address" defaultValue='' name='email' type='text'/>
            </div>
            }
            <p className={`method_title ${anim ? 'fade' : ''}`}>Payment method</p>
            <div className={`img_container ${anim ? 'fade' : ''}`}>
                <div onClick={() => handlePayment('1')} className={`img_block ${value['method'][1] ? 'active_img' : ''}`}>
                    <img src={idram} alt=""/>
                </div>
                <div onClick={() => handlePayment('2')} className={`img_block ${value['method'][2] ? 'active_img' : ''}`}>
                    <img src={visa} alt=""/>
                </div>
                <div onClick={() => handlePayment('3')} className={`img_block ${value['method'][3] ? 'active_img' : ''}`}>
                    <img src={easypay} alt=""/>
                </div>
                <div onClick={() => handlePayment('4')} className={`img_block ${value['method'][4] ? 'active_img' : ''}`}>
                    <img src={mastercard} alt=""/>
                </div>
            </div>

            {sliderSell && Object.keys(value['method']).length !== 0 &&
            <div className={`input_block  ${Object.keys(value['method']).length >0 ? 'fadein' : " 1" }`}>
                <Input id="input" placeholder="Input to wallet" defaultValue='' name='email' type='text'/>
            </div>
            }
            <div className="step2_container">
                <Button name="BACK" className="main_btn__arrows" onClick={prev}/>
                <Button name="CONTINUE" className="main_btn__arrows second_btn" onClick={next}/>
            </div>
        </>
    );
};

export default Step2;