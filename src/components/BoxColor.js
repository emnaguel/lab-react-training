import React from 'react'
import "../index.css"
export default function BoxColor(props) {


        

    return (
        <div style={{margin: "50px"}}>
            <div  style={{justifyContent:"center", width: "100%", display: "flex", height: "70px", border: "1px solid black", backgroundColor: `rgb(${props.r},${props.g},${props.b})`}}>
        
                <h1 >{`rgb(${props.r},${props.g},${props.b})`}</h1>
        
            </div> 
        </div>
    )
}
