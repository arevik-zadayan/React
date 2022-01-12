import React, {useContext} from "react";
import Countdown from "react-countdown";
import {StepContext} from "../context/stepContext";


const Timer = () => {
    const Completionist = () => <span>You are good to go!</span>;
    const {setError, setImage, countStart} = useContext(StepContext)

    const renderer = ({minutes, seconds, completed}) => {
        if (completed) {
            setError(true);
            setImage(false)
            return <Completionist/>;
        } else {
            return (
                <span>
                    {minutes}:{seconds}
                </span>
            );
        }
    };

    return (
        <Countdown
            date={Date.now() + 5000}
            renderer={renderer}
            controlled={countStart}
        />
    );
};

export default Timer;
