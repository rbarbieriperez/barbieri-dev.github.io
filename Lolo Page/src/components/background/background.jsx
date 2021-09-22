import React, { Component } from 'react';

class Background extends Component {
    //Styles
    setBackgroundStyles = {
        width: '100%',
        heigth: '100%',
        backgroundColor: 'black'
    }

    render(){
         return(
            <React.Fragment>
                <div style={ this.setBackgroundStyles }></div>
            </React.Fragment>
         );
    }
}

export default Background;