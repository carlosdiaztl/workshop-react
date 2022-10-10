import React, { Component } from 'react';

import "../../styles/style.scss"

import imageSection1 from "../../images/image-interactivePC.jpg";

function importAll(r) {
    let images = {};
    r.keys().map((item, index) => { images[item.replace('./', '')] = r(item); });
    return images;
  }

  const images = importAll(require.context('../images/imagenCard/', false, /.(png|jpe?g|svg)$/));

console.log(images);

class SectionMain1 extends Component { 

   render(){
       return ( 
        <div className='div__section1'>
            <img src={imageSection1} /> 
            <aside>
                <h2>THE LEADER IN INTERACTIVE VR</h2>
                <p>
                   Founded in 2011, Loopstudios has been producing world-class virtual reality projects for some of the vest companies around the globe. Our award-winning creations have transformed businesses through digital experiences sthat bind to their brand. 
                </p>
            </aside>
        </div>          

       )
   }
}

export default SectionMain1;