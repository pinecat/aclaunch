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
    this.timer = 0;                                               // timer for the countdown
    this.later = new Date(props.cntdwnDate).getTime();            // create future date using cntwnDate from props
    let time = this.calculate(this.later - new Date().getTime()); // calculate countdown for page load
    this.state = {                                                // set the state (intialize the state)
      time: time,
      expired: false,
    }
    this.tick = this.tick.bind(this);                             // bind tick()
    this.calculate = this.calculate.bind(this);                   // bind calculate()
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
    return (
      <div>
        <h1 style={ headerStyle } >
          { this.state.time.days } Days { this.state.time.hours } Hours { this.state.time.minutes } Minutes { this.state.time.seconds } Seconds 
        </h1>
      </div>
    )
  }
}

const headerStyle = {
  color: '#ffffff',
}

export default Timer;