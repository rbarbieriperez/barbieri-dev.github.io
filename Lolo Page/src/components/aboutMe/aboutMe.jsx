import React, { Component } from 'react';
import "../aboutMe.css";
import pincel_logo from './Images/cards/pincel.png'
import Card from '../cards/cards';

class AboutMe extends Component {
    render(){
        return(
            <React.Fragment>
                <section id="aboutMe" class="all-width">
                    <article id="description-container">
                        <h2 id="title">Sobre Mí</h2>
                        <p id="description_1">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus deserunt perspiciatis quis rerum tempore assumenda ea illum, reprehenderit laborum ab, maiores magni, neque quibusdam quo sint voluptate quia! Voluptas, blanditiis!
                        </p>
                        <p id="description_2">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam, accusantium velit. Qui laudantium facilis dignissimos, expedita voluptate, suscipit reiciendis officia corrupti illum mollitia consequuntur culpa eius itaque dolore ipsa non?
                        </p>
                    </article>
                </section>
                <section id="services" class="all-width">
                    <article id="services-title">
                        <h2>¿Qué servicios ofresco? </h2>
                    </article>
                    <article id="services-cards-container">
                        <Card imagesource={pincel_logo} cardtitle="Desarrollo web a medida" carddescription="Example text"></Card>
                        <Card imagesource={pincel_logo} cardtitle="Desarrollo web a medida" carddescription="Example text"></Card>
                        <Card imagesource={pincel_logo} cardtitle="Desarrollo web a medida" carddescription="Example text"></Card>
                        <Card imagesource={pincel_logo} cardtitle="Desarrollo web a medida" carddescription="Example text"></Card>
                        <Card imagesource={pincel_logo} cardtitle="Desarrollo web a medida" carddescription="Example text"></Card>
                        <Card imagesource={pincel_logo} cardtitle="Desarrollo web a medida" carddescription="Example text"></Card>
                    </article>
                </section>

            </React.Fragment>

        );
    }
}

export default AboutMe;