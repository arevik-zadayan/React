import React, {useContext, useState} from 'react';
import {StepContext} from "../../../../../../../context/stepContext";
import img from "../../../../../../../Img/QrCode.png";
import "./StepContent.scss"
import {CopyToClipboard} from "react-copy-to-clipboard/lib/Component";
import {toast, ToastContainer} from "react-toastify";

const StepContent = () => {
    const [copied, setCopied] = useState(false);

    const {sliderSell, anim, step3Anim} = useContext(StepContext)

    if(copied){
        toast('Copied!', {
            position: "top-right",
            autoClose: 3000,
            hideProgressBar: true,
            closeOnClick: true,
            pauseOnHover: false,
            draggable: true,
            progress: undefined,
        });
        setCopied(false)
    }

    return (
        <div className="step3_container">
            {sliderSell && <img src={img} alt="" className={step3Anim ? 'fade' : ''}/>}
            <div className={`transfer_container ${step3Anim ? 'fade' : ''}`}>
                <div className="item">
                    <CopyToClipboard
                        text='Amount: 60.0 USD'
                        onCopy={() => setCopied(true)}
                    >
                    <div className="copy">
                        <svg xmlns="http://www.w3.org/2000/svg" width="10.192" height="10.193"
                             viewBox="0 0 10.192 10.193">
                            <g id="Group_75" data-name="Group 75" transform="translate(-2431.808 -2238.521)">
                                <path id="Path_87" data-name="Path 87"
                                      d="M2435.051,2245.221c0-.658,0-1.317,0-1.975a1.392,1.392,0,0,1,1.483-1.481q1.986,0,3.973,0a1.384,1.384,0,0,1,1.487,1.475q.012,2,0,4a1.379,1.379,0,0,1-1.469,1.469q-2,.012-4,0a1.388,1.388,0,0,1-1.476-1.488C2435.049,2246.553,2435.051,2245.887,2435.051,2245.221Zm6.023.032c0-.674,0-1.349,0-2.023,0-.359-.17-.536-.524-.537q-2.024,0-4.045,0c-.364,0-.524.163-.525.53q0,2.01,0,4.021a.473.473,0,0,0,.543.543q2,0,4,0c.381,0,.555-.177.556-.561C2441.076,2246.568,2441.074,2245.91,2441.074,2245.253Z"
                                      fill="#fbdd00"/>
                                <path id="Path_88" data-name="Path 88"
                                      d="M2431.809,2242c0-.65,0-1.3,0-1.95a1.4,1.4,0,0,1,1.515-1.527q1.962,0,3.924,0a1.4,1.4,0,0,1,1.506,1.509c0,.123.007.247,0,.37a.449.449,0,0,1-.431.427.436.436,0,0,1-.479-.4c-.022-.17-.007-.345-.016-.517a.45.45,0,0,0-.468-.467q-2.074-.009-4.147,0a.455.455,0,0,0-.476.489q-.007,2.061,0,4.122a.455.455,0,0,0,.481.481c.156.007.313-.007.468.008a.459.459,0,0,1-.03.917,3.952,3.952,0,0,1-.785-.047,1.277,1.277,0,0,1-1.029-1.148c-.033-.755-.008-1.512-.008-2.269Z"
                                      fill="#fbdd00"/>
                            </g>
                        </svg>
                    </div>
                    </CopyToClipboard>
                    <div className="item_text"><p>Amount: 60.0 USD</p></div>
                </div>
                <div className="item">
                    <CopyToClipboard
                        text='It will be transferred to you: 28290 AMD'
                        onCopy={() => setCopied(true)}
                    >
                        <div className="copy">
                            <svg xmlns="http://www.w3.org/2000/svg" width="10.192" height="10.193"
                                 viewBox="0 0 10.192 10.193">
                                <g id="Group_75" data-name="Group 75" transform="translate(-2431.808 -2238.521)">
                                    <path id="Path_87" data-name="Path 87"
                                          d="M2435.051,2245.221c0-.658,0-1.317,0-1.975a1.392,1.392,0,0,1,1.483-1.481q1.986,0,3.973,0a1.384,1.384,0,0,1,1.487,1.475q.012,2,0,4a1.379,1.379,0,0,1-1.469,1.469q-2,.012-4,0a1.388,1.388,0,0,1-1.476-1.488C2435.049,2246.553,2435.051,2245.887,2435.051,2245.221Zm6.023.032c0-.674,0-1.349,0-2.023,0-.359-.17-.536-.524-.537q-2.024,0-4.045,0c-.364,0-.524.163-.525.53q0,2.01,0,4.021a.473.473,0,0,0,.543.543q2,0,4,0c.381,0,.555-.177.556-.561C2441.076,2246.568,2441.074,2245.91,2441.074,2245.253Z"
                                          fill="#fbdd00"/>
                                    <path id="Path_88" data-name="Path 88"
                                          d="M2431.809,2242c0-.65,0-1.3,0-1.95a1.4,1.4,0,0,1,1.515-1.527q1.962,0,3.924,0a1.4,1.4,0,0,1,1.506,1.509c0,.123.007.247,0,.37a.449.449,0,0,1-.431.427.436.436,0,0,1-.479-.4c-.022-.17-.007-.345-.016-.517a.45.45,0,0,0-.468-.467q-2.074-.009-4.147,0a.455.455,0,0,0-.476.489q-.007,2.061,0,4.122a.455.455,0,0,0,.481.481c.156.007.313-.007.468.008a.459.459,0,0,1-.03.917,3.952,3.952,0,0,1-.785-.047,1.277,1.277,0,0,1-1.029-1.148c-.033-.755-.008-1.512-.008-2.269Z"
                                          fill="#fbdd00"/>
                                </g>
                            </svg>
                        </div>
                    </CopyToClipboard>
                    <div className="item_text"><p>It will be transferred to you: 28290 AMD</p></div>
                </div>
                <div className="item">
                    <CopyToClipboard
                        text='link / transaction id: 35rA4VdUnL18H4KSZVUZPZe7Zg2vQvx9k8'
                        onCopy={() => setCopied(true)}
                    >
                        <div className="copy">
                            <svg xmlns="http://www.w3.org/2000/svg" width="10.192" height="10.193"
                                 viewBox="0 0 10.192 10.193">
                                <g id="Group_75" data-name="Group 75" transform="translate(-2431.808 -2238.521)">
                                    <path id="Path_87" data-name="Path 87"
                                          d="M2435.051,2245.221c0-.658,0-1.317,0-1.975a1.392,1.392,0,0,1,1.483-1.481q1.986,0,3.973,0a1.384,1.384,0,0,1,1.487,1.475q.012,2,0,4a1.379,1.379,0,0,1-1.469,1.469q-2,.012-4,0a1.388,1.388,0,0,1-1.476-1.488C2435.049,2246.553,2435.051,2245.887,2435.051,2245.221Zm6.023.032c0-.674,0-1.349,0-2.023,0-.359-.17-.536-.524-.537q-2.024,0-4.045,0c-.364,0-.524.163-.525.53q0,2.01,0,4.021a.473.473,0,0,0,.543.543q2,0,4,0c.381,0,.555-.177.556-.561C2441.076,2246.568,2441.074,2245.91,2441.074,2245.253Z"
                                          fill="#fbdd00"/>
                                    <path id="Path_88" data-name="Path 88"
                                          d="M2431.809,2242c0-.65,0-1.3,0-1.95a1.4,1.4,0,0,1,1.515-1.527q1.962,0,3.924,0a1.4,1.4,0,0,1,1.506,1.509c0,.123.007.247,0,.37a.449.449,0,0,1-.431.427.436.436,0,0,1-.479-.4c-.022-.17-.007-.345-.016-.517a.45.45,0,0,0-.468-.467q-2.074-.009-4.147,0a.455.455,0,0,0-.476.489q-.007,2.061,0,4.122a.455.455,0,0,0,.481.481c.156.007.313-.007.468.008a.459.459,0,0,1-.03.917,3.952,3.952,0,0,1-.785-.047,1.277,1.277,0,0,1-1.029-1.148c-.033-.755-.008-1.512-.008-2.269Z"
                                          fill="#fbdd00"/>
                                </g>
                            </svg>
                        </div>
                    </CopyToClipboard>
                    <div className="item_text"><p>link / transaction id: 35rA4VdUnL18H4KSZVUZPZe7Zg2vQvx9k8</p></div>
                </div>
            </div>
        </div>
    );
};

export default StepContent;