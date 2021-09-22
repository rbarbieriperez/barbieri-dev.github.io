import React, {Component} from 'react';
import "./contactForm.css"


class ContactForm extends Component {
    render() {
        return(
            <React.Fragment>
                <section id="contact-container">
                    <h3>Contáctame</h3>
                    <div id="div-form">
                        <form action="submit" id="form">
                            <div id="div-nombre">
                                <label htmlFor="nombre">Nombre:</label>
                                <input type="text" name="nombre" id="nombre" />
                            </div>
                            <div id="div-apellido">
                                <label htmlFor="apellidos">Apellidos:</label>
                                <input type="text" name="apellidos" id="apellidos" />
                            </div>
                            <div id="div-correo">
                                <label htmlFor="correo">Correo:</label>
                                <input type="text" name="correo" id="correo" />
                            </div>
                            <div id="div-mensaje">
                                <label id="lbl_mensaje" htmlFor="mensaje">Mensaje:</label>
                                <textarea name="mensaje" id="mensaje" cols="30" rows="10" maxLength="500"></textarea>
                            </div>
                            
                            <button id="submit">Enviar mensaje</button>
                        </form>
                    </div>
                </section>


            </React.Fragment>
        );

    }
}

export default ContactForm;
