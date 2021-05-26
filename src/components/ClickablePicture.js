import React, { Component } from 'react'

class ClickablePicture extends Component {
    state = {
        picture: '/img/persons/maxence.png'
    }
    
    togglePicture= (img, imgClicked) => {
        this.setState({
            picture: this.state.picture === img ? imgClicked : img
        })
    }
  render(props) {
    return (
      <div >
        <img onClick={() => this.togglePicture(this.props.img, this.props.imgClicked)} src= {this.state.picture} alt= {this.state.picture}/>
      </div>
    )
  }
}

export default ClickablePicture
