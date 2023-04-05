import React from 'react';

class Button extends React.Component {
  handleClick = () => {
    console.log('Button clicked!');
  };

  render() {
    return (
      <button onClick={this.handleClick}>
       <a href="https://www.google.com">Click me!</a> 
      </button>
    );
  }
}

export default Button;
