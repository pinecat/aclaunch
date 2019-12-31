/* imports */
// components
import React, { Component } from 'react';
import Timer from './components/Timer';

// resources
import wallpaper from './resources/img/wallpaper.jpg';
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
      <div style={ bgStyle } > 
        <div style={ defStyle } >
          <h2 style={ headerStyle } >There are</h2>
          <Timer cntdwnDate={ date.cntdwnDate } />
          <h2 style={ headerStyle } >Until Animal Crossing New Horizons Is Released!</h2>
        </div>
      </div>
    );
  }
}

const headerStyle = {
  fontSize: '44px',
}

const defStyle = {
  textAlign: 'center',
  position: 'relative',
  marginTop: '300px',
}

const bgStyle = {
  width: '1920px',
  height: '1080px',
  margin: 0,
  backgroundImage: `url(${ wallpaper })`,
  fontFamily: 'FinkHeavy',
  fontWeight: '900',
  overflow: 'hidden',
}

export default App;
