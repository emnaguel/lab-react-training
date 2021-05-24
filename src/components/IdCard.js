import React from 'react';

function IdCard(props) {
    const mystyle = {
        width: "100%",
        display: "flex",
        border: "1px solid black"
        };
    const mytext= {
        textAlign: "left",
        padding: "5px",
        margin: "10px",
    };
        
    const container={
        margin: "50px"
    }
  return (
    <div style={container}>
        <div style={mystyle} >
            <img src= {props.picture} style={{width: "15%"}} alt={`${props.firstName} ${props.lastName}`}/>
            <div style={mytext}>
                <p><b>firstName:</b> {props.firstName}</p>
                <p><b>lastName:</b> {props.lastName}</p>
                <p><b>gender:</b> {props.gender}</p>
                <p><b>height:</b> {props.height}</p>
                <p><b>birth:</b> {props.birth.toDateString()}</p>
            </div>
        </div>
    </div> 
  );
}

export default IdCard;
