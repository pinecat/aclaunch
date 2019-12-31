import React from 'react';
import wallpaper from './resources/img/wallpaper.jpg';
import './resources/css/finkheavy/finkheavyfont.css';

function App() {
  return (
    <div style={ style } > 
      <h1>Animal Crossing</h1>
    </div>
  );
}

const style = {
  width: '1920px',
  height: '1080px',
  backgroundImage: `url(${ wallpaper })`,
  fontFamily: 'FinkHeavy',
  fontWeight: '900',
}

export default App;
