import React from "react"
import "./Client.scss"


export default function Client(props){
    return(
      <div className="client-main">
       <img src={props.image} alt=""/>
        <p>{props.paraElement}</p>
        <h2>{props.headerTwo}</h2>
        <h3>{props.headerThree}</h3>
    </div>
    )
}  