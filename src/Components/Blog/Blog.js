import React, {useEffect, useState} from 'react';
import BlogBlock from "./BlogBlock/BlogBlock";
import Footer from "../Footer/Footer";
import './Blog.scss';
import main_img from '../../Img/Standing_3 png.png'
import PuffLoader from "react-spinners/PuffLoader";
import instagram from "../../Img/instagram.png";
import telegram from "../../Img/telegram.png";
import fb from "../../Img/fb.png";

export default function  Blog() {
    const [color] = useState("#FBDD00");
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setLoading(true)
        setTimeout(() => {
            setLoading(false)
        }, 1000);
    }, [])
    
    return(
        <div className="blog">
            <div className="container">
                <h1 className="title">BLOG</h1>
                <div className="blog_img_block">
                   <div className="first_img">
                       {/*<img src={main_img2} alt=""/>*/}
                   </div>
                   <div className="sec_img">
                       <img src={main_img} alt=""/>
                   </div>
                </div>
                <div className="about_blog">
                    <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi.
                        Lorem ipsum dolor sit amet, cons ectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.
                    </p>
                </div>
                <div className="blog_block">
                    <BlogBlock />
                    <BlogBlock />
                    <BlogBlock />
                    <BlogBlock />
                    <BlogBlock />
                    <BlogBlock />
                </div>
            </div>
            <div className="blog_footer">
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