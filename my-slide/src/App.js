import React from 'react'
import Navbar from './component/Navbar'
import Container from './component/Container'
import "./App.scss"
import ContainerTwo from './component/ContainerTwo'
import Client from "./component/Client"
import ClientData from './ClientData'
import ContainerThree from './component/ContainerThree'
import ContainerFour from './component/ContainerFour'





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
            <Container />
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