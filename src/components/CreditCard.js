import React from 'react'
import "../styles/Card.css";

export default function CreditCard(props) {
    return (
        <div style={{margin: "30px", width: "100%"}}>
            <div className="Card" style={{backgroundColor: `${props.bgColor}`, color: `${props.color}`}}>
                <div className="Card__type">
                    {props.type}
                </div>
                <div className="Card__number">
                    {("•".repeat(4) + ' ' ).repeat(3)}
   
                    { props.number.split('').slice(props.number.length-4, props.number.length).join('')}
                </div>
                <div className="Card-left Card__text">
                    <div className=" Card-left  ">
                        <p>Expire
                        {props.expirationMonth < 10 ? ` 0${props.expirationMonth}` : ` ${props.expirationMonth}`
                        }/{props.expirationYear.toString().split('').slice(2, 4).join('')}
                        
                        <span> {props.bank}</span></p>
                    </div>
                    <p>{props.owner}</p>
                </div>
            </div> 
        </div>
    )
}
