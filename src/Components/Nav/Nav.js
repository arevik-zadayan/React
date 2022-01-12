import React, {useContext, useState} from 'react';
import './Nav.scss';
import logo from '../../Img/Logo.png'
import en from '../../Img/united-states.png'
import rus from '../../Img/russia.png'
import arm from '../../Img/armenia.png'
import Select from 'react-select';
import {NavLink} from 'react-router-dom';
import {StepContext} from "../../context/stepContext";

const options = [
    {value: 'english', label: <div className="flag"><img src={en} height="20px" width="15px"/>English</div>},
    {value: 'russia', label: <div className="flag"><img src={rus} height="20px" width="15px"/>Russian</div>},
    {value: 'armenia', label: <div className="flag"><img src={arm} height="20px" width="15px"/>Armenian</div>},
];

export default function Nav() {
    const [selectedOption, setSelectedOption] = useState([options[0]]);
    const [isOpened, setIsOpened] = useState(false);
    const [fade, setFade] = useState(false);
    const [openMenu, setOpenMenu] = useState(false);
    const [show, setShow] = useState(false);
    const {setSliderBuy, setSliderSell, setStep, initialStateStep, setValue} = useContext(StepContext);

    const handleChange = (selectedOption) => {
        setSelectedOption(selectedOption)
    };

    const toggle = () => {
        setIsOpened(wasOpened => !wasOpened);
        setOpenMenu(true);
    }

    const toHome = () => {
        setSliderBuy(false);
        setSliderSell(false);
        setValue(initialStateStep)
        setStep(1)
    }

    const showMenu = () => {
        setIsOpened(wasOpened => !wasOpened);
        setShow(!show);
        setFade(true);
    }

    const handleClick = () => {
        setIsOpened(false);
        setShow(!show);
        setOpenMenu(true);
    }

    const handleNav = () => {
        setIsOpened(false);
        setShow(!show);
    }

    // const DropdownIndicator = (
    //     props: ElementConfig<typeof components.DropdownIndicator>
    // ) => {
    //     return (
    //         <components.DropdownIndicator {...props}>
    //             <svg xmlns="http://www.w3.org/2000/svg" width="9.072" height="4.733" viewBox="0 0 9.072 4.733">
    //                 <path id="Path_477" data-name="Path 477" d="M2779.182,2035.636h9.072l-4.733,4.733" transform="translate(-2779.182 -2035.636)" fill="#f0f0f0"/>
    //             </svg>
    //
    //         </components.DropdownIndicator>
    //     );
    // };

    return (
        <nav className="nav">
            <div className="menu_icons">
                <div className="logo_nav">
                    <NavLink to='/' exact>
                        <img
                            src={logo}
                            alt="logo"
                            onClick={toHome}
                        />
                    </NavLink>
                </div>
                <div className="mini_menu" onClick={showMenu}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="30" height="25" viewBox="0 0 30 25">
                        <g id="Group_3491" data-name="Group 3491" transform="translate(-2971 -38)">
                            <rect id="Rectangle_1126" data-name="Rectangle 1126" width="30" height="4" rx="2"
                                  transform="translate(2971 48)" fill="#f2f2f2"/>
                            <g id="Group_3483" data-name="Group 3483">
                                <rect id="Rectangle_1127" data-name="Rectangle 1127" width="30" height="4" rx="2"
                                      transform="translate(2971 38)" fill="#f2f2f2"/>
                                <rect id="Rectangle_1128" data-name="Rectangle 1128" width="30" height="4" rx="2"
                                      transform="translate(2971 59)" fill="#f2f2f2"/>
                            </g>
                        </g>
                    </svg>
                </div>
            </div>
            <div
                onAnimationEnd={() => setFade(false)}
                className={`nav_searching ${show ? 'show' : ''} ${fade ? 'fade' : ''} `}>
                <div className="search_coins">
                    <input type="text" className="input_search_coins" placeholder="Search coins or exchanges"/>
                    <svg xmlns="http://www.w3.org/2000/svg" width="17" height="17"
                         viewBox="0 0 19.134 19.912">
                        <g id="Group_5" data-name="Group 5" transform="translate(-784.422 -43.024)">
                            <path id="Path_35" dataName="Path 35"
                                  d="M792.061,43.024A7.839,7.839,0,0,1,799.93,49.5a7.585,7.585,0,0,1-1.57,6.18c-.118.149-.113.233.021.366q2.418,2.42,4.826,4.85a1.193,1.193,0,0,1-.488,1.984,1.176,1.176,0,0,1-1.228-.316l-4.126-4.125c-.276-.276-.559-.546-.824-.832a.255.255,0,0,0-.38-.042,7.7,7.7,0,0,1-7.477.225,7.655,7.655,0,0,1-4.177-5.873,7.782,7.782,0,0,1,6.425-8.767C791.369,43.075,791.815,43.051,792.061,43.024Zm.2,2.441a5.347,5.347,0,0,0-5.405,5.335,5.4,5.4,0,1,0,5.405-5.335Z"
                                  fill="#f2f2f2"/>
                        </g>
                    </svg>
                </div>
                <div className="flag_select">
                    <Select
                        // components={{ DropdownIndicator }}
                        className="nav-select"
                        defaultValue={[options[0]]}
                        value={selectedOption}
                        options={options}
                        onChange={handleChange}
                        // menuIsOpen={true}
                    />
                </div>
                <div className="humburgerMenu" onClick={toggle}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="30" height="25" viewBox="0 0 30 25">
                        <g id="Group_3491" data-name="Group 3491" transform="translate(-2971 -38)">
                            <rect id="Rectangle_1126" data-name="Rectangle 1126" width="30" height="4" rx="2"
                                  transform="translate(2971 48)" fill="#f2f2f2"/>
                            <g id="Group_3483" data-name="Group 3483">
                                <rect id="Rectangle_1127" data-name="Rectangle 1127" width="30" height="4" rx="2"
                                      transform="translate(2971 38)" fill="#f2f2f2"/>
                                <rect id="Rectangle_1128" data-name="Rectangle 1128" width="30" height="4" rx="2"
                                      transform="translate(2971 59)" fill="#f2f2f2"/>
                            </g>
                        </g>
                    </svg>
                </div>
                {/*{isOpened && (*/}
                <div
                    onAnimationEnd={() => setOpenMenu(false)}
                    className={`humburgerMenu_links ${openMenu ? 'fade' : ''} ${isOpened ? 'menu_open' : ''}`}
                >
                    <NavLink
                        to='/'
                        exact
                        className="link"
                        activeClassName="active"
                        onClick={handleNav}
                    >
                        Home
                    </NavLink>
                    <NavLink
                        to='/about'
                        exact
                        className="link"
                        activeClassName="active"
                        onClick={handleNav}
                    >
                        About
                    </NavLink>
                    <NavLink
                        to='/blog'
                        exact
                        className="link"
                        activeClassName="active"
                        onClick={handleNav}
                    >
                        Blog
                    </NavLink>
                    <NavLink
                        to='/contact'
                        exact
                        className="link"
                        activeClassName="active"
                        onClick={handleNav}
                    >
                        Contacts
                    </NavLink>
                </div>
                {/*)}*/}
            </div>
            {isOpened && <div className='blanket' onClick={handleClick}></div>}
        </nav>
    )
}