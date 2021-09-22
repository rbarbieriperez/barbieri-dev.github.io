import React, { Component } from 'react';
import "./title.css";


class Title extends Component {
    
    render(){
        return(
            <React.Fragment>
                <section id="section-title">
                    <div id="name-container">
                        <h1>Rodrigo Barbieri</h1>
                        <p>Desarrollo Front End</p>
                    </div>
                </section>
            </React.Fragment>
        );
    }
}


export default Title;
