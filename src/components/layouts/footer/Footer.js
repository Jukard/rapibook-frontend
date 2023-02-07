import React, { useRef } from 'react';
import './footer.styles.css';
import emailjs from '@emailjs/browser';

const Footer = () => {
    const form = useRef();
    const serviceId = "service_44botzw";
    const templateId = "template_mz08lnq";
    const publicKey = "uCrsPEyakNRLUAnci";

    const handleSubmit = (e) => {
        e.preventDefault();

        emailjs.sendForm(serviceId, templateId, form.current, publicKey)
        .then((response) => {
            console.log(response.text);
        })
        .catch((error) => {
            console.log(error.text);
        })

        e.target.reset();
    }

    return (
        <section className="footer-container">
            <div className="container">
                <h2>Sientete libre de preguntar aqui.</h2>

                <form onSubmit={handleSubmit} ref={form} className="footer-form">
                    <div className="form-group">
                        <label htmlFor="name" className="form-label">Nombre:</label>
                        <input type="text" name="user_name" id="name" className="form-input" placeholder='Ingrese su Nombre'/>
                    </div>

                    <div className="form-group">
                        <label htmlFor="email" className="form-label">Email:</label>
                        <input type="email" name="user_email" id="email" className="form-input" placeholder="Ingrese su Correo" />
                    </div>

                    <div className="form-group">
                        <label htmlFor="query" className="form-label">Peticion/queja:</label>
                        <textarea className="form-input" name="message" id="query" placeholder='Escriba aqui'></textarea>
                    </div>

                    <div className="form-group">
                        <input type="submit" value="Enviar" className="form-submit" />
                    </div>
                </form>

                <p>&copy; 2023 Rappibook. SENA todos los derechos reservados.</p>
            </div>
        </section>
    )
}

export default Footer;