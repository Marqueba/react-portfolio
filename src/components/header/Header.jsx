import React from "react";
import './header.css'
import CTA from "./CTA";
import ME from '../../assets/mim.png'
import HeadersSocials from "./HeaderSocials";

const Header = () => {
    return (
        <header>
            <div className="container header__container">
                <h5>Olá eu sou</h5>
                <h1>Marcos Reis Dutra</h1>
                <h5 className="text-light">Front-End Web Developer</h5>
                <CTA />
                <HeadersSocials/>

                <div className="me">
                    <img src={ME} alt="me"/>
                </div>

                <a href="#contact" className='scroll__down'>Scroll Down</a>
            </div>
        </header>
    )
}

export default Header;