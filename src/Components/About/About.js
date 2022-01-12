import React, {useEffect, useState} from 'react';
import Footer from "../Footer/Footer";
import './About.scss';
import about_img from '../../Img/Standing_2.png'
import mony1 from '../../Img/Group 24.png'
import mony2 from '../../Img/Group 14.png'
import mony3 from '../../Img/Group 32.png'
import PuffLoader from "react-spinners/PuffLoader";

export default function  About() {
    const [color] = useState("#FBDD00");
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setLoading(true)
        setTimeout(() => {
            setLoading(false)
        }, 1000);
    }, [])

    return(
        <div className="about">
           <div className="container">
               <h1 className="title">ABOUT</h1>
               <div className="about_block">
                   <div className="about_text">
                       <p>
                           SCRYPTON Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.  ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi.
                           Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi.
                       </p>
                       <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat
                       </p>
                   </div>
                   <div className="about_img">
                       <img src={about_img} alt=""/>
                   </div>
                   <img className="mony1" src={mony1} alt=""/>
                   <img className="mony2" src={mony2} alt=""/>
                   <img className="mony3" src={mony3} alt=""/>
               </div>
           </div>
            <Footer />
            {
                loading &&
                <div className="spiner_block">
                    <PuffLoader color={color} loading={loading} size={150}/>
                </div>
            }
        </div>
    )
}