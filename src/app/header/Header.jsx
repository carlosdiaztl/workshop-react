import React, { Component } from 'react';
import img1 from '../images/image-deep-earthPC.jpg';
import '../header/style.scss';


class Header extends Component {

    render(){
        return (
            <main >
            <h1>Header</h1>
            <img src={img1} /> 
            
                
            </main>
        )
    }
}

export default Header;