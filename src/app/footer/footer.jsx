import React, { Component } from 'react';
import img1 from '../images/image-deep-earthPC.jpg'


class Footer extends Component {

    render(){
        return (
            <div className='footer'>
                <h1> Footer</h1>
                <img src={img1} /> 
            </div>
        )
    }
}

export default Footer;