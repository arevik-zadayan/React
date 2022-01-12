import React from 'react';
import img from "../../../../../../../Img/Group 260.png"
import "./Finished.scss"
import Button from "../../../../../../UI/Button/Button";

const Finished = () => {
    return (
        <div className='finished'>
            <img src={img} alt=""/>
            <p>Paid and Confirmed</p>
            <Button
                name="SEE DETAILS"
                className="main_btn__arrows"

            />
        </div>
    );
};

export default Finished;