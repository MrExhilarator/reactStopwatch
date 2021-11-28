// Write your code here
import {Component} from 'react'
import './index.css'

class Stopwatch extends Component {
  state = {
    secondsElapsed: 0,
  }

  componentWillUnmount() {
    this.clearTheInterval()
  }

  clearTheInterval = () => {
    clearInterval(this.timerId)
  }

  startCounter = () => {
    const {secondsElapsed} = this.state
    if (!this.timerId || (this.timerId && secondsElapsed !== 0)) {
      this.timerId = setInterval(this.tick, 1000)
    } else {
      this.clearTheInterval()
      this.resetCounter()
      this.timerId = setInterval(this.tick, 1000)
    }
  }

  tick = () => {
    this.setState(previousState => ({
      secondsElapsed: previousState.secondsElapsed + 1,
    }))
  }

  stopCounter = () => {
    this.clearTheInterval()
  }

  resetCounter = () => {
    this.setState({secondsElapsed: 0})
  }

  getCounter = () => {
    const {secondsElapsed} = this.state
    let minutes = Math.floor(secondsElapsed / 60)
    let secondsLeft = secondsElapsed - minutes * 60
    minutes = minutes < 10 ? `0${minutes}` : minutes
    secondsLeft = secondsLeft < 10 ? `0${secondsLeft}` : secondsLeft
    return {minutes, seconds: secondsLeft}
  }

  render() {
    const {minutes, seconds} = this.getCounter()
    return (
      <div className="background-container">
        <div className="stopwatch-container">
          <h1 className="heading">Stopwatch</h1>
          <div className="control-center">
            <div className="sub-heading-container">
              <img
                src="https://assets.ccbp.in/frontend/react-js/stopwatch-timer.png"
                alt="stopwatch"
              />
              <p className="sub-heading">Timer</p>
            </div>
            <h1 className="counter">
              {minutes}:{seconds}
            </h1>
            <div className="button-container">
              <button
                className="start custom-button"
                type="button"
                onClick={this.startCounter}
              >
                Start
              </button>
              <button
                className="stop custom-button"
                type="button"
                onClick={this.stopCounter}
              >
                Stop
              </button>
              <button
                className="reset custom-button"
                type="button"
                onClick={this.resetCounter}
              >
                Reset
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Stopwatch
