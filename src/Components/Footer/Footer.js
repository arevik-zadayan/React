import React from 'react';
import './Footer.scss';
import main_img2 from '../../Img/footer_bg.png'
import interma_logo from "../../Img/interma_white.png";


export default function  Footer() {
    return(
        <footer>
            <p className='dev_logo'>Designed & Developed By <a href="https://interma.am/" target="_blank"><img
                src={interma_logo} alt=""/></a></p>
            <div className="footer_bg">
                <img src={main_img2} alt=""/>
            </div>
        </footer>
    )
}