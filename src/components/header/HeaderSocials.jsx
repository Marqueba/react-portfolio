import React from "react";
import {BsLinkedin, BsGithub, BsInstagram} from 'react-icons/bs'

const HeadersSocials = () => {
    return (
        <div className='header__socials'>
            <a href="https://linkedin.com/in/marcos-reis-dutra-913875262" target={"_blank"}><BsLinkedin/></a>
            <a href="https://github.com/Marqueba" target={"_blank"}><BsGithub/></a>
            <a href="https://www.instagram.com/marqueba_news/" target={"_blank"}><BsInstagram/></a>
        </div>
    )
}

export default HeadersSocials;