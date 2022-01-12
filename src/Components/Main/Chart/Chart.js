import React, {useEffect, useState} from "react";
import axios from "axios";
import {CoinList, SingleCoin} from "./config/api";
import CoinInfo from "./CoinInfo";
import "./chart.scss"
import Select from "react-select";

export function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

export default function Chart() {
    const [coins, setCoins] = useState([]);
    const [coinsId, setCoinsId] = useState("bitcoin");
    const [currentPrice, setCurrentPrice] = useState();
    const [percent, setPercent] = useState();
    const [selectedOption, setSelectedOption] = useState();
    const [data, setData] = useState();
    const [data1, setData1] = useState(false);
    const [count, setCount] = useState(0);

    const handleChange = (selectedOption) => {
        setSelectedOption(selectedOption)
        setCoinsId(selectedOption.value)
    };
    const fetchCoins = async () => {
        const {data} = await axios.get(CoinList("USD"));
        const options = data.map((row) => {
            return {value: row.id, label: row.symbol.toUpperCase() + " price chart"};
        });
        setCoins(data);
        setCount(count + 1)
        if (count === 0) {
            setSelectedOption(options[0])
        }

        setData(options)


    };
    const fetchSingleData = async () => {
        const {data} = await axios.get(SingleCoin(coinsId));
        setCurrentPrice(data.community_score)
        setPercent(data.public_interest_score)
    };

    useEffect(() => {
        fetchCoins();
        fetchSingleData();
    }, [coinsId]);

    const openMenu = () => {
        setData1(true)
    }
    const closeMenu = () => {
        setData1(false)
    }
    return (
        <div className="chart">
            <div className="container">
                <div className="chart_header">
                   <div className="select_block">
                       {selectedOption && <p className={data1 ? 'coin_name' : ''}>{selectedOption.label}</p>}
                       <Select
                           className="coin_select"
                           // defaultValue={selectedOption}
                           value={selectedOption}
                           options={data}
                           onChange={handleChange}
                           controlShouldRenderValue={!data1}
                           placeholder="Search..."
                           // onFocus={openMenu}
                           // onBlur={closeMenu}
                           onMenuClose={closeMenu}
                           onMenuOpen={openMenu}
                       />
                   </div>
                    <div className='right'>
                        <div className='price'>
                            <p>Price to USD</p>
                            <p>$ {currentPrice}</p>
                        </div>
                        <div className='change'>
                            <p>24h change</p>
                            <p>+ {percent}</p>
                        </div>
                    </div>
                </div>
                <CoinInfo coin={coinsId}/>
            </div>
        </div>
    );
}