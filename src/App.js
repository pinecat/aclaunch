import React from 'react';
import wallpaper from './resources/img/wallpaper.jpg';
import './App.css';
import './resources/css/finkheavyfont.css';

function App() {
  return (
    <div style={ style } > 
      
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
