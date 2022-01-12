import axios from "axios";
import {useEffect, useState} from "react";
import {HistoricalChart} from "./config/api";
import {Line} from "react-chartjs-2";
import {chartDays} from "./config/data";
import {CircularProgress} from "@material-ui/core";

const CoinInfo = ({coin}) => {
    const [historicData, setHistoricData] = useState();
    const [days, setDays] = useState(1);
    const [loading, setLoading] = useState(false);
    const fetchHistoricData = async () => {
        setLoading(true);
        const {data} = await axios.get(HistoricalChart(coin, days, "USD"));

        setHistoricData(data.prices);
        setLoading(false);

    };

    useEffect(() => {
        fetchHistoricData();
    }, [days, coin]);
    const data = (canvas) => {
        const ctx = canvas.getContext('2d')
        var gradient = ctx.createLinearGradient(0, 2000, 0, 0);
        gradient.addColorStop(1, 'rgba(253,223,0,1)');
        gradient.addColorStop(0, 'rgba(255,255,255, 0)');
        return {
            labels: historicData.map((coin) => {
                let date = new Date(coin[0]);
                let hours =
                    date.getHours() < 10
                        ? `0${date.getHours()}`
                        : `${date.getHours()}`;
                let minutes =
                    date.getMinutes() < 10
                        ? `0${date.getMinutes()}`
                        : `${date.getMinutes()}`;
                let time = `${hours}:${minutes}`;
                return days === 1 ? time : date.toLocaleDateString();
            }),
            datasets: [
                {
                    data: historicData.map((coin) => coin[1]),
                    borderColor: "#EC008A",
                    fill: true,
                    backgroundColor: gradient,
                },
            ],
        }
    }
    const options = {
        plugins: {
            legend: {
                display: false,
            },
        },
        elements: {
            point: {
                radius: 1,
            },
        },
        scales: {
            x: {
                grid: {
                    display: false
                },
                ticks: {
                    color: "#fff",
                    font: {
                        size: 12,
                        family: "Montserratarm-Medium"
                    }
                },
            },
            y: {
                grid: {
                    display: false
                }
            }
        }
    }


    return (
        <div className="coin_info">
            {historicData &&
            <>
                <div className='page_wrapper'>
                {loading ? (
                    <div className="loader">
                        <CircularProgress
                            style={{color: "#FBDD00", height: "100%"}}
                            size={100}
                            thickness={1}
                        />
                    </div>
                ) : (
                    <Line data={data} options={options}
                    />
                )}
                    </div>
                <div className="chart-days">
                    {chartDays.map((day) => (
                        <span
                            key={day.value}
                            className={day.value==days ? 'active_span' : ''}
                            onClick={() => setDays(day.value)}
                            selected={day.value === days}
                        >
                  {day.label}
                </span>
                    ))}
                </div>
            </>
            }
        </div>

    );
};

export default CoinInfo;
