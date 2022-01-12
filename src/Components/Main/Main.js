import React from 'react';
import BuyOrSell from "./BuyOrSell/BuyOrSell";
import ExchangeRate from "./ExchangeRate/ExchangeRate";
import Chart from "./Chart/Chart";
import MainFooter from "./MainFooter/MainFooter";
import {ToastContainer} from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

const Main = () => {
    return (
        <>
            <BuyOrSell />
            <ExchangeRate />
            <Chart />
            <MainFooter />
            <ToastContainer
                style={{width:"200px"}}
                position="top-right"
                autoClose={3000}
                hideProgressBar={true}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover={false}
            />
        </>
    );
};

export default Main;