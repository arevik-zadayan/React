import React, {useContext, useState} from 'react';
import img from "../../../../../../../Img/Group 191.png"
import Button from "../../../../../../UI/Button/Button";
import "./error.scss"
import CallCenter from "../CallCenter/CallCenter";
import {StepContext} from "../../../../../../../context/stepContext";

const Error = () => {
    const {setImage, setAnim}=useContext(StepContext)
    const [err, setErr] = useState(false)

    const handleError = () => {
        setErr(true)
        setImage(false)
        setAnim(true);
        setTimeout(() => {
            setAnim(false)
        }, 1000);
    }
    return (
        <>
            {err ? <CallCenter/> :
                <div className='error_container'>

                    <img src={img} alt=""/>
                    <p>An error occurred</p>
                    <Button
                        name="CONTACT US"
                        className="main_btn__arrows"
                        onClick={handleError}
                    />
                </div>
            }
        </>
    );
};

export default Error;
