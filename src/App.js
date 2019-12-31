/* imports */
// components
import React, { Component } from 'react';
import Timer from './components/Timer';

// resources
import wallpaper from './resources/img/wallpaper.jpg';
import github from './resources/img/github.png';
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
      <a href="https://github.com/pinecat/aclaunch" target="_blank" rel="noopener noreferrer"><img src={ github } style={ imgStyle }/></a>
        <div style={ defStyle }>
          <Timer cntdwnDate={ date.cntdwnDate } />
        </div>
      </div>
    );
  }
}

const imgStyle = {
  position: 'absolute',
  width: '40px',
  height: '40px',
  left: '0px',
  bottom: '0px',
  margin: '0px',
}

const defStyle = {
  textAlign: 'center',
  position: 'relative',
  marginTop: '300px',
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
