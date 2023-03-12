import React from "react";
import './footer.css'
import {BsGithub, BsInstagram, BsLinkedin} from "react-icons/bs";

const Footer = () => {
    return (
        <footer>
            <a href="#" className='footer__logo'>Marcos Reis Dutra</a>
            
            <ul className='permalinks'>
                <li><a href="#">Início</a></li>
                <li><a href="#about">Sobre mim</a></li>
                <li><a href="#experience">Experiência</a></li>
                <li><a href="#portfolio">Portfólio</a></li>
                <li><a href="#contact">Contato</a></li>
            </ul>

            <div className="footer__socials">
                <a href="https://linkedin.com/in/marcos-reis-dutra-913875262" target={"_blank"}><BsLinkedin/></a>
                <a href="https://github.com/Marqueba" target={"_blank"}><BsGithub/></a>
                <a href="https://www.instagram.com/marqueba_news/" target={"_blank"}><BsInstagram/></a>
            </div>

            <div className="footer__copyright">
                <small>&copy; Marcos Reis Dutra - Todos os direitos reservados</small>
            </div>
        </footer>
    )
}

export default Footer;