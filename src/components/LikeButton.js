import React from 'react';
 
class LikeButton extends React.Component {
    
  state = {
    count: 0,
    colors: ['purple','blue','green','yellow','orange','red']
  };
 
  handleIncrementClick = (event) => {
    event.target.style.backgroundColor = this.state.colors[Math.floor(Math.random() * this.state.colors.length)];
    this.setState({
        count: this.state.count + 1,
        
      });
  };


 
  render() {
    return (
      <div>

        <button onClick={this.handleIncrementClick}>{this.state.count}  Likes</button>
      </div>
    );
  }
}
 
export default LikeButton;