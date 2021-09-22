import React, { Component } from 'react';
import './cards.css';
import pincel_logo from './images/pincel.png'


class Card extends Component {
    render(){
        return(
            <React.Fragment>
                <div id="card_1" class="cards-size">
                    <div class="cards-image-size">
                        <img src={ this.props.imagesource } alt="imagen descriptiva" />
                    </div>
                    <div class="cards-p-size cards-h3-size">
                        <h3> { this.props.cardtitle} </h3>
                        <p> { this.props.carddescription } </p>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}

export default Card;