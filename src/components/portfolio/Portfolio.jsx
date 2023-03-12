import React from "react";
import './portfolio.css'
import IMG1 from '../../assets/1.svg'
import IMG2 from '../../assets/2.svg'
import IMG3 from '../../assets/3.svg'
import IMG4 from '../../assets/4.svg'
import IMG5 from '../../assets/5.svg'
import IMG6 from '../../assets/6.svg'

const data = [
    {
        id: 1,
        image: IMG1,
        title: 'Dev Calculadora',
        description: 'Calculadora desenvolvida no Desafio #05 do BoraCodar da Rocketseat.',
        github: 'https://github.com/Marqueba/calculator',
        demo: 'https://marqueba.github.io/calculator/'
    },
    {
        id: 2,
        image: IMG2,
        title: 'RocketPay',
        description: 'O Rocketpay é um formulário de cartão de crédito com máscaras de input e atualização via DOM.',
        github: 'https://github.com/Marqueba/rocketpay-explorer',
        demo: 'https://rocketpay-explorer-rho.vercel.app'
    },
    {
        id: 3,
        image: IMG6,
        title: 'Agendamentos de Tarefas',
        description: 'O projeto é um agendamento de atividades desenvolvido em um curso introdutório de React.',
        github: 'https://github.com/Marqueba/agendamento-atividades',
        demo: 'https://agendamento-atividades.vercel.app'
    },
    {
        id: 4,
        image: IMG4,
        title: 'Card NLW Copa',
        description: 'Criação de uma figurinha personalizada na preparação da Next Level Week Copa da Rocketseat',
        github: 'https://github.com/Marqueba/nlw-copa-card',
        demo: 'https://marqueba.github.io/nlw-copa-card/'
    },
    {
        id: 5,
        image: IMG5,
        title: 'Formulário Responsivo',
        description: 'Projeto de Formulário de Cadastro Responsivo, com base em uma vídeo aula disponibilizada no Youtube.',
        github: 'https://github.com/Marqueba/formulario-responsivo',
        demo: 'https://marqueba.github.io/formulario-responsivo/'
    },
    {
        id: 6,
        image: IMG3,
        title: 'Planner Ártemis',
        description: 'Projeto escolar cujo objetivo é o desenvolvimento de um planner utilizando Python, Tkinter e SQLite.',
        github: 'https://github.com/Marqueba/Artemis-Projeto-Integrador',
        demo: ''
    }
]

const Portfolio = () => {
    return (
        <section id='portfolio'>
            <h5>Meus Projetos Recentes</h5>
            <h2>Portfólio</h2>

            <div className="container portfolio__container">
                {data.map((e) => {
                    return (
                        <article key={e.id} className="portfolio__item">
                            <div className="portfolio__item-image">
                                <img src={e.image} alt={e.title}/>
                            </div>
                            <h3>{e.title}</h3>
                            <h5 className="text-light">{e.description}</h5>
                            <div className="portfolio__item-cta">
                                <a href={e.github} className='btn' target='_blank'>Github</a>
                                {e.demo ?
                                    <a href={e.demo} className='btn btn-primary' target='_blank'>View Demo</a>
                                    : ""
                                }
                            </div>
                        </article>
                    )
                })}
            </div>
        </section>
    )
}

export default Portfolio;