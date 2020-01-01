/* imports */
// components
import React, { Component } from 'react';

// resources
//import msgboard from '../resources/img/messageboard.png';
import reddit from '../resources/img/reddit.png';
import github from '../resources/img/github.png';
import discord from '../resources/img/discord.png';

class Social extends Component {
  render() {
    return (
      <div style={ divStyle }>
        { /* <img src={ msgboard } style={ msgStyle } alt="messageboard" /> */ }
        <a href="https://reddit.com/r/AnimalCrossing" target="_blank" rel="noopener noreferrer"><img src={ reddit } alt="github" style={ imgStyle }/></a>
        <a href="https://github.com/pinecat/aclaunch" target="_blank" rel="noopener noreferrer"><img src={ github } alt="github" style={ imgStyle }/></a>
        <a href="https://discord.gg/9z9zNy7" target="_blank" rel="noopener noreferrer"><img src={ discord } alt="github" style={ imgStyle }/></a>
      </div>
    )
  }
}

const imgStyle = {
  position: 'relative',
  maxWidth: '35px',
  maxHeight: '35px',
  width: 'auto',
  height: 'auto',
  margin: '5px',
  marginRight: '5px',
  marginLeft: '5px',
}

const divStyle = {
  position: 'absolute',
  bottom: '0px',
  right: '0px',
  maxHeight: '45px',
  height: 'auto',
}

// const msgStyle = {
//   position: 'absolute',
//   right: '0px',
//   margin: '0px',
//   marginRight: '5px',
//   marginLeft: '5px',
//   width: '22%',
//   height: '30%',
// }

export default Social;