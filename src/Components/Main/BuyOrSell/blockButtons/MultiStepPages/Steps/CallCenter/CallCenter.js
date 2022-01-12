import React, {useContext} from 'react';
import "./CallCenter.scss"
import Button from "../../../../../../UI/Button/Button";
import {StepContext} from "../../../../../../../context/stepContext";

const CallCenter = () => {
    const {setSliderBuy, setSliderSell, setStep, anim, setCountStart, setError, setValue, initialStateStep}=useContext(StepContext);

    const toHome = () => {
        setSliderBuy(false);
        setSliderSell(false);
        setCountStart(false);
        setError(false);
        setValue(initialStateStep)
        setStep(1)
    }

    return (
        <div className={`call_center ${anim ? 'fade' : ''}`}>
            <p>If you have any problems, please contact</p>
            <div className="info">
                <div className="info_item">
                    <div className="img_div">
                        <svg xmlns="http://www.w3.org/2000/svg" width="27.831" height="21.863"
                             viewBox="0 0 27.831 21.863">
                            <path id="Path_46" data-name="Path 46"
                                  d="M3993.035,2275H3973.24a4.023,4.023,0,0,0-4.018,4.018v13.827a4.023,4.023,0,0,0,4.018,4.018h19.795a4.023,4.023,0,0,0,4.018-4.018v-13.827A4.023,4.023,0,0,0,3993.035,2275Zm0,1.921a2.131,2.131,0,0,1,.477.056l-8.351,9.476a2.7,2.7,0,0,1-4.047,0l-8.351-9.476a2.138,2.138,0,0,1,.477-.056Zm2.1,15.924a2.1,2.1,0,0,1-2.1,2.1H3973.24a2.1,2.1,0,0,1-2.1-2.1v-13.827a2.083,2.083,0,0,1,.157-.8l8.373,9.5a4.617,4.617,0,0,0,6.929,0l8.373-9.5a2.091,2.091,0,0,1,.157.8Z"
                                  transform="translate(-3969.222 -2275)" fill="#ec008a"/>
                        </svg>
                    </div>
                    <p>scrypton@gmail.com</p>
                </div>
                <div className="info_item">
                    <div className="img_div">
                        <svg xmlns="http://www.w3.org/2000/svg" width="19.679" height="28.121"
                             viewBox="0 0 19.679 28.121">
                            <g id="Group_38" data-name="Group 38"
                               transform="translate(-3973.111 -2320.355)">
                                <path id="Path_47" data-name="Path 47"
                                      d="M3988.628,2320.355h-11.354a4.167,4.167,0,0,0-4.163,4.162v19.8a4.168,4.168,0,0,0,4.163,4.162h11.354a4.167,4.167,0,0,0,4.162-4.162v-19.8A4.167,4.167,0,0,0,3988.628,2320.355Zm-11.354,1.92h11.354a2.245,2.245,0,0,1,2.242,2.242v15.86h-15.838v-15.86A2.245,2.245,0,0,1,3977.274,2322.275Zm11.354,24.281h-11.354a2.245,2.245,0,0,1-2.242-2.242V2342.3h15.838v2.016A2.245,2.245,0,0,1,3988.628,2346.556Z"
                                      fill="#ec008a"/>
                                <path id="Path_48" data-name="Path 48"
                                      d="M3982.688,2325.039a.769.769,0,1,0-.768-.768A.768.768,0,0,0,3982.688,2325.039Z"
                                      fill="#ec008a"/>
                                <path id="Path_49" data-name="Path 49"
                                      d="M3982.688,2343.493a.768.768,0,1,0,.768.768A.768.768,0,0,0,3982.688,2343.493Z"
                                      fill="#ec008a"/>
                            </g>
                        </svg>
                    </div>
                    <p>+374 007 007 087</p>
                </div>
            </div>
            <Button
                name="BACK TO HOME"
                className="main_btn__arrows"
                onClick={toHome}
            />
        </div>
    );
};

export default CallCenter;