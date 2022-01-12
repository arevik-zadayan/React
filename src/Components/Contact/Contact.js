import React, {useEffect, useState} from "react";
import Footer from "../Footer/Footer";
import "./Contact.scss"
import img1 from "../../Img/coin.png";
import img2 from "../../Img/coin2.png";
import PuffLoader from "react-spinners/PuffLoader";

function Contact() {
    const [color] = useState("#FBDD00");
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setLoading(true)
        setTimeout(() => {
            setLoading(false)
        }, 1000);
    }, [])

    return (
        <div className="contact">
            <h1>CONTACTS</h1>
            <div className="contact_container">
                <img className="coin1" src={img1} alt=""/>
                <img className="coin2" src={img2} alt=""/>
                <img className="coin3" src={img1} alt=""/>
                <div className="map">
                    <div className="map_cont">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d97583.88432375477!2d44.418527418380634!3d40.15350050866109!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x406aa2dab8fc8b5b%3A0x3d1479ae87da526a!2sYerevan%2C%20Armenia!5e0!3m2!1sen!2s!4v1634716111604!5m2!1sen!2s"
                            allowFullScreen=""
                            style={{width: "100%", height: "100%", borderRadius: "22px", border: "none"}}
                            loading="lazy"></iframe>
                    </div>
                </div>
                <div className="forms">
                    <form>
                        <input type="mail" placeholder="Mail"/>
                        <textarea name="" id="" cols="30" rows="10" placeholder="Message"></textarea>
                        <button>SEND MESSAGE</button>
                    </form>
                </div>
                <div className="contact__info">
                    <div className="info__item">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24.21" height="31.139"
                             viewBox="0 0 24.21 31.139">
                            <g id="Group_3479" data-name="Group 3479" transform="translate(-319.004 -3938.117)">
                                <g id="Group_3477" data-name="Group 3477">
                                    <path id="Path_30449" data-name="Path 30449"
                                          d="M331.109,3969.256h0a1.083,1.083,0,0,1-.793-.345c-.462-.5-11.312-12.25-11.312-18.689a12.1,12.1,0,0,1,24.21,0c0,6.439-10.85,18.192-11.312,18.689A1.083,1.083,0,0,1,331.109,3969.256Zm0-28.974a9.951,9.951,0,0,0-9.94,9.94c0,4.274,6.568,12.547,9.94,16.341,3.371-3.794,9.94-12.067,9.94-16.341A9.951,9.951,0,0,0,331.109,3940.282Z"
                                          fill="#ec008a"/>
                                </g>
                                <g id="Group_3478" data-name="Group 3478">
                                    <path id="Path_30450" data-name="Path 30450"
                                          d="M331.109,3955.143a5.45,5.45,0,1,1,5.45-5.45A5.456,5.456,0,0,1,331.109,3955.143Zm0-8.734a3.285,3.285,0,1,0,3.285,3.284A3.288,3.288,0,0,0,331.109,3946.409Z"
                                          fill="#ec008a"/>
                                </g>
                            </g>
                        </svg>
                        <p>adress 15/84</p>
                    </div>
                    <div className="info__item">
                        <svg xmlns="http://www.w3.org/2000/svg" width="31.376" height="24.648"
                             viewBox="0 0 31.376 24.648">
                            <path id="Path_30445" data-name="Path 30445"
                                  d="M600.847,3942.024H578.53a4.535,4.535,0,0,0-4.53,4.53v15.588a4.535,4.535,0,0,0,4.53,4.53h22.317a4.535,4.535,0,0,0,4.529-4.53v-15.588A4.535,4.535,0,0,0,600.847,3942.024Zm0,2.165a2.384,2.384,0,0,1,.538.064l-9.415,10.683a3.04,3.04,0,0,1-4.563,0l-9.415-10.683a2.383,2.383,0,0,1,.538-.064Zm2.364,17.953a2.368,2.368,0,0,1-2.364,2.365H578.53a2.368,2.368,0,0,1-2.365-2.365v-15.588a2.344,2.344,0,0,1,.178-.9l9.44,10.71a5.205,5.205,0,0,0,7.811,0l9.44-10.71a2.363,2.363,0,0,1,.177.9Z"
                                  transform="translate(-574 -3942.024)" fill="#ec008a"/>
                        </svg>
                        <p>scrypton@gmail.com</p>
                    </div>
                    <div className="info__item">
                        <svg xmlns="http://www.w3.org/2000/svg" width="22.186" height="31.705"
                             viewBox="0 0 22.186 31.705">
                            <g id="Group_3475" data-name="Group 3475" transform="translate(-878.385 -3934.157)">
                                <path id="Path_30446" data-name="Path 30446"
                                      d="M895.878,3934.157h-12.8a4.7,4.7,0,0,0-4.693,4.693v22.319a4.7,4.7,0,0,0,4.693,4.693h12.8a4.7,4.7,0,0,0,4.693-4.693V3938.85A4.7,4.7,0,0,0,895.878,3934.157Zm-12.8,2.165h12.8a2.531,2.531,0,0,1,2.528,2.528v17.881H880.55V3938.85A2.531,2.531,0,0,1,883.078,3936.322Zm12.8,27.374h-12.8a2.53,2.53,0,0,1-2.528-2.527V3958.9h17.856v2.273A2.53,2.53,0,0,1,895.878,3963.7Z"
                                      fill="#ec008a"/>
                                <path id="Path_30447" data-name="Path 30447"
                                      d="M889.182,3939.438a.866.866,0,1,0-.866-.866A.866.866,0,0,0,889.182,3939.438Z"
                                      fill="#ec008a"/>
                                <path id="Path_30448" data-name="Path 30448"
                                      d="M889.182,3960.243a.867.867,0,1,0,.866.866A.866.866,0,0,0,889.182,3960.243Z"
                                      fill="#ec008a"/>
                            </g>
                        </svg>
                        <p>+374 007 007 087</p>
                    </div>
                </div>
            </div>
            <Footer/>
            {
                loading &&
                <div className="spiner_block">
                    <PuffLoader color={color} loading={loading} size={150}/>
                </div>
            }
        </div>
    )
}

export default Contact;