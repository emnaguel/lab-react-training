import React, { Component } from 'react'

export class NumbersTable extends Component {
    render(props) {
        const array = []
        for(let i = 0; i < this.props.limit; i++) {
            array.push(i)
        }

        return (
       
            <div style={{width: "40%"}} className="container d-flex flex-wrap">
              {array.map((element) => 
                  <div style={{width: "70px", height: "70px"}} className="card flex-row d-flex justify-content-center align-items-center">
                     
                          {(element % 2 === 0) &&
                            <div style={{width: "100%", height: "100%", backgroundColor: "red"}}>
                              <h1>{element}</h1></div>
                          } 
                          {(element % 2 !== 0) &&
                             <div> <h1>{element}</h1></div>
                          } 
                          
                          
                    
                  </div>
              )}
            </div>
          )
    }
}

export default NumbersTable
