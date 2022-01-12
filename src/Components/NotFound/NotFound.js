import React, {useEffect, useState} from "react";
import "./NotFound.scss"
import main_img from '../../Img/Standing_3 png.png'
import Footer from "../Footer/Footer";
import PuffLoader from "react-spinners/PuffLoader";

export default function NotFound() {
    const [color] = useState("#FBDD00");
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setLoading(true)
        setTimeout(() => {
            setLoading(false)
        }, 1000);
    }, [])

    return (
        <div className="not_found">
            <h1>Error 404</h1>
            <p>Page not found!</p>
            <div className="img">
                <img src={main_img} alt=""/>
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