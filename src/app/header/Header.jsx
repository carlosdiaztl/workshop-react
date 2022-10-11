import React, { Component } from 'react';
import im1 from "../images/image-heroPC.jpg"
import logo from "../images/image-heroPC.jpg"


class Header extends Component {

render() {
    return (
       
            <div className='header' style={{backgroundImage:"url(../images/image-heroPC.jpg)"}}>
           
              
                
                <nav>
                <img  src={im1} />
                <section>
                  <button>
                  hidesss

                  </button>
                  <button>
                  career
                    
                  </button>
                  <button>
                  reflexice
                    
                  </button>
                  <button>
                  squadron
                    
                  </button>

                  <button>
                  boltereia
                    
                  </button>

                </section>
                
                

                </nav>
                <aside> <h1>hoelo we are creat a backgroundImage <br></br> dream like a </h1></aside>
            </div>
      
    )
}
}

export default Header;