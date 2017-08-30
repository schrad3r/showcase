import React, { Component } from 'react';

export default class FilterString extends Component {
  constructor() {
      super();
      this.state = {
        unfilteredArray: ["hello", "goodbye", "lol", "brb"],
        userInput: '',
        filteredArray: []
      };
    }

    handleChange(val) {
      this.setState({ userInput: val });
    }

    updateFilter(userInput) {
      var unfiltered = this.state.unfilteredArray;
      var filtered = [];

      for (var i=0; i<unfiltered.length; i++) {
        if (unfiltered[i].includes(userInput)) {
          filtered.push(unfiltered[i]);
        }
      }
      this.setState({filteredArray: filtered});
    }
  render() {
    return (
      <div className="puzzleBox filterStringPB"> 
      <h4>Filter String</h4>
      <span className="puzzleText">Unfiltered: {JSON.stringify(this.state.unfilteredArray, null, 10) }</span>
      <input className="inputLine" onChange={ (e) => this.handleChange(e.target.value) }></input>
      <button className="confirmationButton" onClick={ () => this.updateFilter(this.state.userInput)}>Filter</button>
      <span className="resultsBox filterStringRB">Filtered: {JSON.stringify(this.state.filteredArray, null, 10)}</span>
      </div> 
    )
  }
}
