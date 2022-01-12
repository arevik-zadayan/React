import React, {Fragment, useContext, useState} from 'react';
import "./BlockButtons.scss";
import TitleArrow from "../../../UI/titleArrow/TitleArrow";
import BuyOrSellStep from "./MultiStepPages/BuyOrSellStep";
import {StepContext} from "../../../../context/stepContext";
import MainButton from "../../../UI/MainButton/MainButton";

const BlockButtons = () => {
    const {sliderBuy, setSliderBuy, sliderSell, setSliderSell, anim} = useContext(StepContext);
    const [fade, setFade] = useState(false)
    const BuyClickHandler = () => {
        setSliderBuy(true)
        setFade(true);
        setTimeout(() => {
            setFade(false)
        }, 2000);

    }
    const SellClickHandler = () => {
        setSliderSell(true)
        setFade(true);
        setTimeout(() => {
            setFade(false)
        }, 2000);
    }
    return (
        <div className={`block_buttons ${fade ? 'fade' : ''}`}>
            <div className='buttons_container'>
                {!sliderBuy && !sliderSell &&
                <Fragment>
                    <TitleArrow className="main_title" name="WHAT ARE YOU UP TO ?"/>
                    <MainButton onClick={BuyClickHandler} name='Buy'/>
                    <MainButton onClick={SellClickHandler} name='Sell' className='pink'/>
                </Fragment>
                }
                {sliderBuy &&
                <BuyOrSellStep
                    stepTitle1="WHAT YOU WANT TO BUY?"
                    stepTitle2="WHERE IT WILL GO?"
                    stepTitle3="PLEASE MAKE TRANSFER"
                    stepTitle4="YOU HAVE 30 MINUTES TO COMPLETE THE TRANSACTION"
                />
                }
                {sliderSell &&
                <BuyOrSellStep
                    stepTitle1="WHAT YOU WANT TO SELL?"
                    stepTitle2="WHERE TO TRANSFER?"
                    stepTitle3="PLEASE MAKE TRANSFER"
                    stepTitle4="YOU HAVE 30 MINUTES TO COMPLETE THE TRANSACTION"
                />
                }
            </div>
        </div>
    );
};

export default BlockButtons;
