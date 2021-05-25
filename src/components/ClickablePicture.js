import React, { Component } from 'react'

class ClickablePicture extends Component {
    state = {
        picture: '/img/persons/maxence.png'
    }
    
    togglePicture= () => {
        this.setState({
            picture: this.state.picture === '/img/persons/maxence.png' ? '/img/persons/maxence-glasses.png' : '/img/persons/maxence.png'
        })
    }
  render() {
    return (
      <div>
        <img onClick={this.togglePicture} src= {this.state.picture}/>
      </div>
    )
  }
}

export default ClickablePicture
