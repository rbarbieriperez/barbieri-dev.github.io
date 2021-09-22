import React, { Component } from 'react';
import "./navbar.css";

class Navbar extends Component {

    
    render (){
        return(
            <React.Fragment>
                <section id="section-navbar">
                    <ul className="send-to-right">
                        <li className="send-to-right set-margin"><a className="set-style" href="">Contáctame</a></li>
                        <li className="send-to-right set-margin"><a className="set-style" href="">Sobre mí</a></li>
                        <li className="send-to-right set-margin"><a className="set-style" href="">Inicio</a></li>
                    </ul>
                </section>
                
            </React.Fragment>
            
        );
    }
}

export default Navbar;