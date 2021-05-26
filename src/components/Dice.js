import React, { Component } from 'react'

export class Dice extends Component {

    state = {
        picture: ['/img/dice1.png', '/img/dice2.png', '/img/dice3.png', '/img/dice4.png', '/img/dice5.png','/img/dice6.png'][Math.floor(Math.random() * ['/img/dice1.png', '/img/dice2.png', '/img/dice3.png', '/img/dice4.png', '/img/dice5.png','/img/dice6.png'].length)]
    }

    handleClick = () => {
        this.setState({
            picture: '/img/dice-empty.png'
        })
        setInterval(
            this.setState({
                picture:'/img/dice6.png'
            })
           

          , 1000);
    }
    render() {
        return (
            <div >
                <img alt="Dice" style={{height: "60px"}} src={this.state.picture} onClick={this.handleClick}/>
            </div>
        )
    }
}

export default Dice
