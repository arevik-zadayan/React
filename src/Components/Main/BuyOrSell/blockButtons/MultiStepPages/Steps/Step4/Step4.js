import React, {useContext} from 'react';
import Button from "../../../../../../UI/Button/Button";
import TitleArrow from "../../../../../../UI/titleArrow/TitleArrow";
import {StepContext} from "../../../../../../../context/stepContext";
import Timer from "../../../../../../../utils/CountDown";
import Error from "../Error/error";
import "./Step4.scss"
import StepContent from "../StepContent_3_4/StepContent";

const Step4 = (props) => {
    const {setImage, error, setImgAnim, setStep3Anim} = useContext(StepContext)

    const prev = (e) => {
        e.preventDefault();
        props.prevStep();
        setImage(false)
        setImgAnim(true)
        setStep3Anim(false)
        setTimeout(() => {
            setImgAnim(false)
        }, 1000);
    }

    return (
        <>
            {error ? <Error/> :
                <>
                    <TitleArrow name={props.name}/>
                    <StepContent />
                    <div className="step4_btn_container">
                        <Button name="BACK" className="main_btn__arrows" onClick={prev}/>
                        <div className="timer">
                            <Timer/>
                            <svg xmlns="http://www.w3.org/2000/svg" width="24.881" height="24.876"
                                 viewBox="0 0 24.881 24.876">
                                <g id="Group_37" data-name="Group 37" transform="translate(-4234.555 -2437.025)">
                                    <g id="Group_36" data-name="Group 36">
                                        <path id="Path_40" data-name="Path 40"
                                              d="M4248.221,2461.792v-2.422c.644-.16,1.293-.263,1.9-.481a9.662,9.662,0,0,0,6.715-8,9.843,9.843,0,0,0-6.594-10.9,16.747,16.747,0,0,0-1.783-.436c-.124-.029-.254-.015-.252-.205,0-.768,0-1.536,0-2.3a12.437,12.437,0,0,1,.012,24.755Z"
                                              fill="#fff"/>
                                        <path id="Path_41" data-name="Path 41"
                                              d="M4253.2,2453.075l-.931,1.528-2.17-1.3q-2.078-1.247-4.155-2.492c-.128-.077-.226-.143-.225-.329.008-2.377.005-4.753.006-7.13a1.276,1.276,0,0,1,.017-.14h1.853v.35c0,1.919.008,3.838-.008,5.756a.629.629,0,0,0,.355.641c1.674.974,3.335,1.969,5,2.957C4253.023,2452.963,4253.1,2453.015,4253.2,2453.075Z"
                                              fill="#fff"/>
                                        <path id="Path_42" data-name="Path 42"
                                              d="M4245.71,2437.025v2.4c-.877.278-1.752.483-2.565.832a25.175,25.175,0,0,0-2.259,1.232l-1.858-1.686A12.355,12.355,0,0,1,4245.71,2437.025Z"
                                              fill="#fff"/>
                                        <path id="Path_43" data-name="Path 43"
                                              d="M4239.062,2443.349a8.773,8.773,0,0,0-1.4,2.481c-.236.7-.389,1.423-.592,2.133-.024.085-.127.21-.2.211-.759.015-1.518.01-2.324.01a12.307,12.307,0,0,1,2.715-6.608Z"
                                              fill="#fff"/>
                                        <path id="Path_44" data-name="Path 44"
                                              d="M4239.088,2455.537l-1.8,1.745a12.508,12.508,0,0,1-2.724-6.611c.81,0,1.588,0,2.365.007.052,0,.138.1.147.162A10.133,10.133,0,0,0,4239.088,2455.537Z"
                                              fill="#fff"/>
                                        <path id="Path_45" data-name="Path 45"
                                              d="M4239.068,2459.084l1.785-1.708a9.992,9.992,0,0,0,3.407,1.727c.4.112.818.173,1.223.275.089.022.227.116.229.18.016.767.01,1.535.01,2.343A12.541,12.541,0,0,1,4239.068,2459.084Z"
                                              fill="#fff"/>
                                    </g>
                                </g>
                            </svg>
                        </div>
                    </div>
                </>
            }
        </>
    );
};

export default Step4;