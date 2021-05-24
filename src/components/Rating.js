import React from 'react'

export default function Rating(props) {

 
        return (
            <div>
                <h1>{"★".repeat(Math.round(props.children))}{"☆".repeat(5- Math.round(props.children))}</h1>
            </div>
        )
      
}
