import React, { Component } from 'react';
// import "..main/style.scss";

import SectionMain1 from './sectionMain/SectionMain1.jsx';

class Main extends Component {

    render() {
        return (
           <main className='main'>
               <SectionMain1 />
           </main>
        )
    }
}

export default Main;