import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class LeapYear extends Component {
  constructor(props) {
    super(props);
    this.textInput = React.createRef();
    this.state = {
            data: ''
        }
    }
  render() {
    return (
      <div className='App'>
        <header><h1>Check if a year Leap year</h1></header>
        <section>
            <label>Enter a year</label><br/>
            <input className='MarginTop10' ref={this.textInput} type='number'/><br/>
            <button className='MarginTop10'>check</button>
        </section>
      </div>
    );
  }
}

export default LeapYear;
