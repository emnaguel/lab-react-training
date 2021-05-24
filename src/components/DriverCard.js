import React from 'react'
import Rating from './Rating'

export default function DriverCard(props) {
    return (
        <div style={{margin: "50px"}}>
            <div style={{display: 'flex', justifyContent: "center", backgroundColor: "#455EB5", alignItems: "center", borderRadius: "20px"}}>
                <div>
                    <img style={{borderRadius: "50%", height: "100px"}}src={props.img} alt={props.name}/>
                </div>
                <div style={{color: "white"}}>
                    <h3>{props.name}</h3>
                    <h3><Rating children={props.rating}/> </h3>
                    <p>{props.car.model} - {props.car.licensePlate}</p>
                </div>
            </div>
        </div>
    )
}
