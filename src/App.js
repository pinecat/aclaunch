/* imports */
// components
import React, { Component } from 'react';
import Timer from './components/Timer';
import Social from './components/Social';

// resources
import wallpaper from './resources/img/pinecat.png';
import smallpaper from './resources/img/green.jpg';
import './resources/css/finkheavy/finkheavyfont.css';
import date from './resources/txt/date.json';

/*
  class App
  React.Component
  entry point of the react app
*/
class App extends Component {
  constructor() {
    super();
    this.state = {
      width: window.innerWidth,
    };
    this.handleWindowResize = this.handleWindowResize.bind(this);
  }

  componentWillMount() {
    window.addEventListener('resize', this.handleWindowResize);
  }

  handleWindowResize() {
    this.setState({ width: window.innerWidth });
  }

  /*
    render
      renders the DOM
    params:
      none
    returns:
      void
  */
  render() {
    const { width } = this.state;
    const small = width <= 700;
    if (small) {
      return (
        <div style={ textStyle }> 
          <img src={ smallpaper } style={ bgStyle } alt="pinecat" />
          <div style={ defStyle }>
            <Timer cntdwnDate={ date.cntdwnDate } />
          </div>
          <Social />
        </div>
      );
    } else {
      return (
        <div style={ textStyle } > 
          <img src={ wallpaper } style={ bgStyle } alt="pinecat" />
          <div style={ defStyle }>
            <Timer cntdwnDate={ date.cntdwnDate } />
          </div>
          <Social />
        </div>
      );
    }
  }
}

const defStyle = {
  position: 'fixed',
  top: '55%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  textAlign: 'center',
};

const bgStyle = {
  width: '100%',
  height: '100%',
  position: 'absolute',
  top: 0,
  left: 0,
};

const textStyle = {
  overflowX: 'hidden',
  fontFamily: 'FinkHeavy',
  fontWeight: '900',
}

export default App;
