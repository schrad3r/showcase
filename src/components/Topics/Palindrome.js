import React, { Component } from 'react';

class Palindrome extends Component {
  constructor() {
    super();
    this.state = {
      userInput: '',
      palindrome: ''
    }
  }

  handleChange(val) {
    this.setState({userInput: val});
  }

  updatePalindrome(userInput) {
    var reverse = userInput.split("").reverse().join("");
    var check = this.state.palindrome;
    if (userInput === reverse) {
      check = "true";
    } else {
      check = "false";
    }
    this.setState({palindrome: check});
  }

  render() {
    return (
      <div className="puzzleBox filterStringPB">
      <h4>Palindrome</h4>
      <input className="inputLine" onChange={ (e) => this.handleChange(e.target.value) }></input>
      <button className="confirmationButton" onClick={ () => this.updatePalindrome(this.state.userInput)}>Check</button>
      <span className="resultsBox">Palindrome: {this.state.palindrome}</span>
      </div>
    )
  }
}

export default Palindrome;