import React, {useContext, useEffect, useState} from "react";
import "./BuyOrSell.scss";
import img from '../../../Img/Personaj1.png'
import img1 from '../../../Img/coin.png'
import img2 from '../../../Img/coin2.png'
import img3 from '../../../Img/coin3.png'
import img4 from '../../../Img/coin4.png'
import img5 from '../../../Img/person.png'
import MainImg from "../../Img/mainImg";
import BlockButtons from "./blockButtons/BlockButtons";
import {StepContext} from "../../../context/stepContext";
import ActiveStep from "./blockButtons/ActiveStep/ActiveStep";
import PuffLoader from "react-spinners/PuffLoader";

function BuyOrSell() {
    const {sliderBuy, sliderSell, image,imgAnim} = useContext(StepContext)
    const [color] = useState("#FBDD00");
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setLoading(true)
        setTimeout(() => {
            setLoading(false)
        }, 2000);
    }, [])

    return (
        <div className='block'>
            <h1>DIGITAL MONEY, YOUR FUTURE!</h1>
            <div className='activeStep'>
                {sliderBuy && <ActiveStep/>}
                {sliderSell && <ActiveStep/>}
            </div>

            <div className='container'>
                <img className='coin3' src={img3} alt=""/>
                <img className='coin4' src={img4} alt=""/>
                {!image ? <MainImg className={`${imgAnim ? 'fade' : ''}`} img={img}/> : <MainImg className={`${imgAnim ? 'fade' : ''}`} img={img5}/>}
                <BlockButtons/>
                <img className='coin1' src={img1} alt=""/>
                <img className='coin2' src={img2} alt=""/>
            </div>
            {
                loading &&
                <div className="spiner_block">
                    <PuffLoader color={color} loading={loading} size={150}/>
                </div>
            }
        </div>
    )
}

export default BuyOrSell;