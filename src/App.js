import {useEffect, useState} from "react";
import Nav from "./Components/Nav/Nav";
import Blog from "./Components/Blog/Blog";
import About from "./Components/About/About";
import Contact from "./Components/Contact/Contact";
import NotFound from "./Components/NotFound/NotFound";
import {Redirect, Route, Switch} from 'react-router-dom';
import PuffLoader from "react-spinners/PuffLoader";
import './App.css';
import {StepContext} from "./context/stepContext";
import Main from "./Components/Main/Main";

function App() {
    const options=[
        {value:'bitcoin',label:"Bitcoin | BTC"},
        {value:'bitcoin1',label:"Bitcoin1 | BTC"},
        {value:'bitcoin2',label:"Bitcoin2 | BTC"},
    ]

    const option = [
        {value: 'Usd', label: "USD"},
        {value: 'Amd', label: "AMD"},
    ]

    const initialStateStep = {
        amount:'54660',
        number:'1',
        email:'',
        select_coin:options[0],
        select_amount:option[0],
        method:{}
    }
    const [color] = useState("#FBDD00");
    const [loading, setLoading] = useState(true);
    const [step, setStep] = useState(1);
    const [sliderBuy, setSliderBuy] = useState(false);
    const [sliderSell, setSliderSell] = useState(false);
    const [image, setImage] = useState(false);
    const [error, setError] = useState(false);
    const [anim, setAnim] = useState(false);
    const [step3Anim, setStep3Anim] = useState(false);
    const [imgAnim, setImgAnim] = useState(false);
    const [countStart, setCountStart] = useState(true);
    const [value, setValue] = useState(initialStateStep);
    const [initialState, setState] = useState({
        currencies: [
            {value: 'Usd', label: "Usd"},
            {value: 'Usd1', label: "Usd1"},
            {value: 'Usd2', label: "Usd2"},
        ],
        currencies1: [
            {value: 'Btc', label: "Btc"},
            {value: 'Btc1', label: "Btc1"},
            {value: 'Btc2', label: "Btc2"},
        ],
        base: "Btc - Bitcoin",
        amount: "",
        convertTo: "Usd - US dollar",
        result: "",
        date: "",
    });

    useEffect(() => {
        setLoading(true)
        setTimeout(() => {
            setLoading(false)
        }, 1000);
    }, [])

    return (
        <StepContext.Provider value={{
            step,
            setStep,
            sliderSell,
            setSliderSell,
            sliderBuy,
            setSliderBuy,
            setImage,
            image,
            error,
            setError,
            initialState,
            setState,
            anim,
            setAnim,
            imgAnim,
            setImgAnim,
            step3Anim,
            setStep3Anim,
            countStart,
            setCountStart,
            setValue,
            value,
            options,
            option,
            initialStateStep
        }}>
            <div className="App">
                <Nav/>
                <Switch>
                    <Route path='/' exact component={Main}/>
                    <Route path='/about' exact component={About}/>
                    <Route path='/blog' exact component={Blog}/>
                    <Route path='/contact' exact component={Contact}/>
                    <Route path='/404' exact component={NotFound}/>
                    <Redirect to='/404'/>
                </Switch>
                {
                    loading &&
                    <div className="spiner_block">
                        <PuffLoader color={color} loading={loading} size={150}/>
                    </div>
                }
            </div>
        </StepContext.Provider>
    );
}

export default App;