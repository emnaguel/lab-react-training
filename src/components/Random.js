import React from 'react'

export default function Random(props) {
    const mystyle = {
        width: "100%",

        border: "1px solid black"
        };

        
    const container={
        margin: "50px"
    }
    return (
        <div style={container} >
            <div style={mystyle} >
            <h1>Random value between {props.min} and {props.max} => 
            {Math.floor(Math.random() * props.max) + props.min }
            </h1>
            </div>
        </div>
    )
}
