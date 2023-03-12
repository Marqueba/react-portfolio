import React from "react";
import './about.css'
import ME from '../../assets/me-about.png'
import {FaAward} from "react-icons/fa";
import {VscFolderLibrary} from "react-icons/vsc";

const About = () => {
    return (
        <section id='about'>
            <h5>Conhecendo</h5>
            <h2>Sobre Mim</h2>

            <div className="container about__container">
                <div className="about__me">
                    <div className="about__me-image">
                        <img src={ME} alt="About Image"/>
                    </div>
                </div>

                <div className="about__content">
                    <div className="about__cards">
                        <article className='about__card'>
                            <FaAward />
                            <h5>Experiência</h5>
                            <small>1+ Anos Desenvolvendo</small>
                        </article>
                        <article className='about__card'>
                            <VscFolderLibrary />
                            <h5>Projetos</h5>
                            <small>20+ Desenvolvidos</small>
                        </article>
                    </div>

                    <p>
                        Olá meu nome é Marcos Reis Dutra, estudante do Instituto Federal de Educação, Ciência e Tecnologia de Rondônia - IFRO - Campus Calama, bem como membro participante do Grupo de Pesquisa em Soluções Tecnológicas do referido Campus.

                        Desde sempre, nutri grande interesse em trabalhar com programação e, a fim de concretizar esse sonho, dediquei-me ao estudo de HTML, CSS e JavaScript. Atualmente, estou empenhado em aprimorar meus conhecimentos no desenvolvimento de aplicações Web, área que considero extremamente relevante e promissora.

                    </p>

                    <a href="#contact" className='btn btn-primary'>Entrar em Contato</a>
                </div>
            </div>
        </section>
    )
}

export default About;