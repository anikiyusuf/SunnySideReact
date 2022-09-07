import React from 'react'
import "./Container.scss"



export  default function Container(props){
    return(
      <div className="container">  
           <div className="container-section-odd">
           <div className="text-one">
             <h1>Transform your brand</h1>
             <p>Using a collaborative formula of designers, researchers,photographers, videographers, and copywriters, we’ll build and extend your brand in digital places."</p>
             <h3>Learn More</h3>
             </div>
             <div className="image-one">
             <img src={props.picture3} alt="" className="desktop-image-1" />
             <img src={props.picture4}  alt="" className="mobile-image-1" />
          </div>
          </div>

        <div className="container-section-even">
          <div className="text-two">
            <h1>Stand out to the right audience </h1>
            <p>Using a collaborative formula of designers, researchers, photographers, videographers, and copywriters, we’ll build and extend your brand in digital places."</p>
            <h3>Learn More </h3>
          </div>
          <div className="image-two">
          <img src={props.picture1} alt="" className="desktop-image-2" />
          <img src={props.picture2} alt="sfjfkggskgsbgbj" className="mobile-image-2" />

          </div>
        </div>

     </div>
    );
   }