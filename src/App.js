import React, { Component } from 'react';
import wallpaper from './resources/img/wallpaper.jpg';
import './resources/css/finkheavy/finkheavyfont.css';
import Timer from './components/Timer'

class App extends Component {
  constructor(props) {
    super(props)
    var offset = new Date().getTimezoneOffset();
    console.log(offset);
  }

  render() {
    return (
      <div style={ style } > 
        <h1>Animal Crossing</h1>
        <Timer />
      </div>
    );
  }
}

const style = {
  width: '1920px',
  height: '1080px',
  margin: 0,
  backgroundImage: `url(${ wallpaper })`,
  fontFamily: 'FinkHeavy',
  fontWeight: '900',
}

export default App;
