import React, {useContext, useEffect} from "react";
import axios from "axios";
import "./Coverter.scss"
import img from "../../../../Img/change.png"
import ExchangeBtn from "../../../UI/ExchangeBtn/ExchangeBtn";
import {StepContext} from "../../../../context/stepContext";

const Convertor = () => {
    const {initialState, setState} = useContext(StepContext);

    const {currencies, currencies1, base, amount, convertTo, result, date} = initialState;

    useEffect(() => {
        if (amount === isNaN) {

        } else {
            const getCurrencyconvertTor = async () => {
                const response = await axios.get(
                    `https://api.exchangerate.host/latest?base=${base}`
                );
                // console.log("response==>", response);
                // const date = response.data.date;
                // const result = (response.data.rates[convertTo] * amount).toFixed(3);
                // setState({
                //     ...initialState,
                //     result,
                //     date,
                // });
            };
            getCurrencyconvertTor();
        }
    }, [amount, base, convertTo]);

    const handleSwap = (e) => {
        e.preventDefault();
        setState({
            ...initialState,
            convertTo: base,
            base: convertTo,
            currencies: currencies1,
            currencies1: currencies,
            result: null,

        });
    };

    return (
        <div className='exchange_items'>
            <div className='form_cont'>
                <ExchangeBtn
                    options={currencies1}
                    currencyName="base"
                    selectValue={base}
                    inpValue={amount}
                    type="number"
                />
            </div>
            <div>
                <div onClick={handleSwap} style={{cursor: "pointer"}}>
                    <img src={img} alt=""/>
                </div>
            </div>
            <div className='form_cont'>
                <ExchangeBtn
                    options={currencies}
                    disabled={true}
                    name="convertTo"
                    currencyName="convertTo"
                    selectValue={convertTo}
                    type="text"
                    inpValue={
                        amount === ""
                            ? "0"
                            : result === null
                                ? "Calculating..."
                                : result
                    }
                />
            </div>
        </div>
    );
};

export default Convertor;