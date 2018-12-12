import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class LeapYear extends Component {
  constructor(props) {
    super(props);
    this.textInput = React.createRef();
    this.state = {
      output: ''
    }
    this.checkIfLeapYear = this.checkIfLeapYear.bind(this);
  }
  checkIfLeapYear() {
    let year = this.textInput.current.value;
    if (year === '') {
          this.setState({ output: '1' });
          return '';
    }else{
        let result = (year % 100 === 0)?(year %400 ===0) :(year % 4 === 0);
        this.setState({ output: result });
        return result;
    }
  }
  render() {
    return (
      <div className='App'>
        <header><h1>Check if a year Leap year</h1></header>
        <section>
            <label>Enter a year</label><br/>
            <input className='MarginTop10' ref={this.textInput} name='input' type='number'/><br/>
            <button className='MarginTop10' onClick={this.checkIfLeapYear}>check</button><br/>
            {this.state.output === '1' ? <p id="warn">Please enter year</p> : null}
            {this.state.output !== '1' && this.state.output !== '' ?
            <p>
            {this.state.output ? <span id="leap">Hurray! its a Leap year</span> : <span id="notLeap">Oops! its not a Leap year</span>}</p>
            : null}
        </section>
      </div>
    );
  }
}

export default LeapYear;
