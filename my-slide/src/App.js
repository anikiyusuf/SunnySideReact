import React from 'react'
import Navbar from './component/Navbar'
import Container from './component/Container'
import "./App.scss"
import ContainerTwo from './component/ContainerTwo'
import Client from "./component/Client"
import ClientData from './ClientData'
import ContainerThree from './component/ContainerThree'
import ContainerFour from './component/ContainerFour'
import stand1 from './image/image-stand-out-desktop.jpg'
import stand2 from './image/image-stand-out-mobile.jpg'
import transform1 from './image/image-transform-desktop.jpg'
import transform2 from './image/image-transform-mobile.jpg'






export default function App(){

const clientElement= ClientData.map(item => {
    return(
        <Client 
        key={item.id}
        {...item} />
    )
})

    return(
        <div className="App">
            <Navbar />
            <Container   
              picture3={transform1} 
              picture4={transform2}
              picture1={stand1} 
              picture2={stand2} 
          />
            <ContainerTwo/>
            <section className="client-section-all">
               <h1> Client testimonials</h1>
               <section className="client-section">
                 {clientElement}
               </section>
            </section>
            <ContainerThree />
            <ContainerFour />
        </div>
        
    )
}