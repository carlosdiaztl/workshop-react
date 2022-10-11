import React, { Component } from 'react';
import "../app/styles/style.scss"
import Footer from './footer/footer.jsx';
import Header from './header/Header.jsx';


class App extends Component {

    render() {
        return (
            <>

            <Header/>
            <Footer/>
            </>

        )
    }
}

export default App;