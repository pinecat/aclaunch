/* imports */
// components
import React, { Component } from 'react';

/* 
  class Timer
  React.Component 
*/
class Timer extends Component {
  /*
    constructor
      initializes the timer, calculates countdown for page load
    params:
      props:
        cntdwnDate - str - date we are counting down to
    returns:
      void
  */
  constructor(props) {
    super(props);                                                 // call super on props
    this.timer = 1;                                               // timer for the countdown
    this.later = new Date(props.cntdwnDate).getTime();            // create future date using cntwnDate from props
    let time = this.calculate(this.later - new Date().getTime()); // calculate countdown for page load
    let expired = false;                                          // variable to hold expired
    if (time.seconds <= 0) {                                      // if we're past the countdown date...
      expired = true;                                             // ...set expired to true
    }
    this.state = {                                                // set the state (intialize the state)
      time: time,
      expired: expired,
      width: window.innerWidth,
    }
    this.tick = this.tick.bind(this);                             // bind tick()
    this.calculate = this.calculate.bind(this);                   // bind calculate()
    this.handleWindowResize = this.handleWindowResize.bind(this); // bind handleWindowResize()
  }

  componentWillMount() {
    window.addEventListener('resize', this.handleWindowResize);
  }

  handleWindowResize() {
    this.setState({ width: window.innerWidth });
  }

  /*
    componentDidMount
      checks if the DOM mounted, if so, starts the countdown clock
    params:
      none
    returns:
      void
  */
  componentDidMount() {
    this.timer = setInterval(this.tick, 1000) // call this.tick in 1 second intervals
  }

  /*
    calculate
      calculates the remaining days, hours, mins, and secs given a distance (later - now)
    params:
      distance - # - the time remaining between our countdown date and the current date
    returns:
      time - json - object of the days, hours, mins, and secs remaining
  */
  calculate(distance) {
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));                        // calculate days
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));  // calculate hours
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));          // calculate minutes
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);                      // calculate seconds
    let time = {  // create object to store data for return
      days: days,
      hours: hours,
      minutes: minutes,
      seconds: seconds,
    };
    return time; // return the data
  }

  /*
    tick
      func passed to setInterval, gets current date, then
      calls calculate and updates the state accordingly
    params:
      none
    returns:
      void
  */
  tick() {
    var now = new Date().getTime();       // get current date and time
    var distance = this.later - now;      // figure out distance between both datetimes
    if (distance <= 0) {                  // if distance is less than or equal to zero...
      clearInterval(this.timer)           // ...we have finished the countdown, so clear the interval
      this.setState({                     // and set expired to true
        expired: true,
      });
    }
    var time = this.calculate(distance);  // calculate the days, hours, mins, and secs
    this.setState({                       // set the state
      time: time,
    });
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
      let timerStyle = {
        color: '#ffffff',
        fontSize: '32px',
        margin: '5px',
        padding: '5px',
        paddingTop: '20px',
      };
      return (
        <div>
          { this.state.expired ? (
            <div>
              <h2 style={ h2Style }>Well, what are you waiting for?  It's out!</h2>  
              <h2 style={ h2Style }>Go buy the game!</h2>
              <h3 style={{ color: '#000000' }}>
                <a href="https://www.nintendo.com/games/detail/animal-crossing-new-horizons-switch/" target="_blank" rel="noopener noreferrer">Nintendo</a>{ ' ' } | { ' ' }
                <a href="https://www.amazon.com/dp/B07SL6ZXBL/ref=cm_sw_em_r_mt_dp_U_GGVcEb1TD7B5F" target="_blank" rel="noopener noreferrer">Amazon</a>{ ' ' } | { ' ' }
                <a href="https://www.gamestop.com/video-games/switch/games/products/animal-crossing-new-horizons/10168434.html" target="_blank" rel="noopener noreferrer">Gamestop</a>
              </h3>
            </div>
          ) : (
            <div>
              <h1 style={ timerStyle }>
                { this.state.time.days } Days { this.state.time.hours } Hours { this.state.time.minutes } Minutes { this.state.time.seconds } Seconds 
              </h1>
              <h3>Counting down to March 20, 2020.</h3>
            </div>
          ) }
        </div>
      )
    } else {
      let timerStyle = {
        color: '#ffffff',
        fontSize: '42px',
        margin: '5px',
        padding: '5px',
      };
      return (
        <div>
          { this.state.expired ? (
            <div>
              <h2 style={ h2Style }>Well, what are you waiting for?  It's out!</h2>  
              <h2 style={ h2Style }>Go buy the game!</h2>
              <h3 style={{ color: '#000000' }}>
                <a href="https://www.nintendo.com/games/detail/animal-crossing-new-horizons-switch/" target="_blank" rel="noopener noreferrer">Nintendo</a>{ ' ' } | { ' ' }
                <a href="https://www.amazon.com/dp/B07SL6ZXBL/ref=cm_sw_em_r_mt_dp_U_GGVcEb1TD7B5F" target="_blank" rel="noopener noreferrer">Amazon</a>{ ' ' } | { ' ' }
                <a href="https://www.gamestop.com/video-games/switch/games/products/animal-crossing-new-horizons/10168434.html" target="_blank" rel="noopener noreferrer">Gamestop</a>
              </h3>
            </div>
          ) : (
            <div>
              <h1 style={ timerStyle }>
                { this.state.time.days } Days { this.state.time.hours } Hours { this.state.time.minutes } Minutes { this.state.time.seconds } Seconds 
              </h1>
              <h2 style={ h2Style }>Until New Horizons Is Released!</h2>
              <h3>Counting down to March 20, 2020.</h3>
            </div>
          ) }
        </div>
      )
    }
  }
}

const h2Style = {
  fontSize: '32px',
  padding: '0px',
  margin: '0px',
};

export default Timer;