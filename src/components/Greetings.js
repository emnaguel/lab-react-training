import React from 'react';

function Greetings(props) {
    
    const mystyle = {
        width: "100%",

        border: "1px solid black"
        };

    const container={
        margin: "50px"
    }
    if(props.lang==="de"){

        return (
          <div style={container} >
              <div style={mystyle} >
                 
                  <h1>Hallo {props.children}</h1>
              </div>
          </div> 
        );

    } else if(props.lang==="fr") {
        return (
            <div style={container} >
                <div style={mystyle} >
                   
                    <h1>Bonjour {props.children}</h1>
                </div>
            </div> 
          );

    } else if(props.lang==="es") {
        return (
            <div style={container} >
                <div style={mystyle} >
                   
                    <h1>Holla {props.children}</h1>
                </div>
            </div> 
          );
    } else {

        return (
            <div style={container} >
                <div style={mystyle} >
                   
                    <h1>Hello {props.children}</h1>
                </div>
            </div> 
          );

    }
}

export default Greetings;
