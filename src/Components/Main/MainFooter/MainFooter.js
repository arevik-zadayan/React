import React from 'react';
import './MainFooter.scss';
import main_footer_bg from "../../../Img/main_footer_bg.png";
import logo1 from "../../../Img/logo1.png";
import logo2 from "../../../Img/logo2.png";
import logo3 from "../../../Img/logo3.png";
import logo4 from "../../../Img/logo4.png";
import logo5 from "../../../Img/logo5.png";
import logo6 from "../../../Img/logo6.png";
import logo7 from "../../../Img/logo7.png";
import logo8 from "../../../Img/logo8.png";
import logo9 from "../../../Img/logo9.png";
import logo10 from "../../../Img/logo10.png";
import instagram from "../../../Img/instagram.png";
import fb from "../../../Img/fb.png";
import telegram from "../../../Img/telegram.png";
import interma_logo from "../../../Img/interma_dark.png"

const MainFooter = () => {
    return (
        <div className="main_footer">
            <div className="footer_container">
                <div className="footer_text">
                    <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut
                        laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation
                        ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure
                        dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla
                        facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril
                        delenit augue duis dolore te feugait nulla facilisi.
                        Lorem ipsum dolor sit amet, cons ectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt
                        ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci
                        tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.
                        Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut
                        laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation
                        ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure
                        dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla
                        facilisis at vero </p>
                </div>
                <div className="footer_logo">
                    <div className="left">
                        <img src={logo1} alt="logo1"/>
                        <img src={logo2} alt="logo2"/>
                        <img src={logo3} alt="logo3"/>
                        <img src={logo4} alt="logo4"/>
                        <img src={logo5} alt="logo5"/>
                        <img src={logo6} alt="logo6"/>
                        <img src={logo7} alt="logo7"/>
                        <img src={logo8} alt="logo8"/>
                        <img src={logo9} alt="logo9"/>
                        <img src={logo10} alt="logo10"/>
                    </div>
                    <div className="right">
                        <a href="#">
                            <img src={instagram} alt="instagram"/>
                        </a>
                        <a href="#">
                            <img src={telegram} alt="telegram"/>
                        </a>
                        <a href="#">
                            <img src={fb} alt="facebook"/>
                        </a>
                    </div>
                </div>
                <div className='dev_logo'>Designed & Developed By <a href="https://interma.am/" target="_blank">
                    <img src={interma_logo} alt=""/>
                </a></div>
            </div>
            <div className="footer_bg">
                <img src={main_footer_bg} alt="main_footer_bg"/>
            </div>
        </div>
    );
};

export default MainFooter;