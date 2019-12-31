/* imports */
// components
import React, { Component } from 'react';
import Timer from './components/Timer';

// resources
import wallpaper from './resources/img/pinecat.png';
import reddit from './resources/img/reddit.png';
import github from './resources/img/github.png';
import discord from './resources/img/discord.png';
import './resources/css/finkheavy/finkheavyfont.css';
import date from './resources/txt/date.json';

/*
  class App
  React.Component
  entry point of the react app
*/
class App extends Component {
  /*
    render
      renders the DOM
    params:
      none
    returns:
      void
  */
  render() {
    return (
      <div style={ bgStyle }> 
      <a href="https://reddit.com/r/AnimalCrossing" target="_blank" rel="noopener noreferrer"><img src={ reddit } alt="github" style={ imgStyle }/></a>
      <a href="https://github.com/pinecat/aclaunch" target="_blank" rel="noopener noreferrer"><img src={ github } alt="github" style={ imgStyle }/></a>
      <a href="https://discord.gg/9z9zNy7" target="_blank" rel="noopener noreferrer"><img src={ discord } alt="github" style={ imgStyle }/></a>
        <div style={ defStyle }>
          <Timer cntdwnDate={ date.cntdwnDate } />
        </div>
      </div>
    );
  }
}

const imgStyle = {
  position: 'relative',
  width: '40px',
  height: '40px',
  left: '0px',
  margin: '0px',
  marginRight: '5px',
  marginLeft: '5px',
}

const defStyle = {
  textAlign: 'center',
  position: 'relative',
  marginTop: '420px',
};

const bgStyle = {
  width: '1920px',
  height: '1080px',
  margin: 0,
  backgroundImage: `url(${ wallpaper })`,
  fontFamily: 'FinkHeavy',
  fontWeight: '900',
  overflow: 'hidden',
};

export default App;
