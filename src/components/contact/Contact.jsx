import React from "react";
import './contact.css'
import {MdOutlineEmail} from "react-icons/md";
import {BsWhatsapp} from "react-icons/bs";
import {useRef} from "react";
import emailjs from 'emailjs-com'

const Contact = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault()
        emailjs.sendForm('service_i6fymvg', 'template_0e7sx6g', form.current, '14MEaAMq2iinmYI9A')
            .then(function(response) {
                console.log('SUCCESS!', response.status, response.text);
            }, function(error) {
                console.log('FAILED...', error);
            });
        alert('E-mail Enviado!')
        e.target.reset()
    }
    return (
        <section id='contact'>
            <h5>Entrar em Contato</h5>
            <h2>Contate-me</h2>

            <div className="container contact__container">
                <div className="contact__options">
                    <article className="contact__option">
                        <MdOutlineEmail className='contact__option-icon'/>
                        <h4>E-mail</h4>
                        <h5>reis17265@gmail.com</h5>
                        <a href="mailto:reis17265@gmail.com" target="_blank">Envie uma mensagem</a>
                    </article>

                    <article className="contact__option">
                        <BsWhatsapp className='contact__option-icon'/>
                        <h4>WhatsApp</h4>
                        <h5>+55 69 993821799</h5>
                        <a href="https://api.whatsapp.com/send?phone=5569993821799" target="_blank">Envie uma mensagem</a>
                    </article>

                </div>
                {/*END OF CONTACT OPTIONS*/}
                <form ref={form} onSubmit={sendEmail}>
                    <input type="text" name="name" placeholder="Seu Nome Completo" required />
                    <input type="email" name="email" placeholder="Seu E-mail" required />
                    <textarea name="message" rows="7" placeholder="Sua messagem" required ></textarea>
                    <button type='submit' className='btn btn-primary'>Enviar Messagem</button>
                </form>
            </div>
        </section>
    )
}

export default Contact;