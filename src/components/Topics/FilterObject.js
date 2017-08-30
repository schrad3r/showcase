import React, { Component } from 'react';

export default class FilterObject extends Component {
  constructor() {
    super();
    this.state = {
      unfilteredArray: [ {dog: "Corgi", name: "Pistol"}, {horse: "Solid", name: "Bullet"}, {cat: "Tabby", name: "Chloe"} ],
      userInput: '',
      filteredArray: []
    }
  }

  handleChange(val) {
    this.setState({userInput: val});
  }

  updateFilteredArray(prop) {
    var unfilter = this.state.unfilteredArray;
    var filter = [];

    for (var i=0; i< unfilter.length; i++) {
      if (unfilter[i].hasOwnProperty(prop)) {
        filter.push(unfilter[i]);
      }
    }
      this.setState({filteredArray: filter});
  }

  render() {
    return (
      <div className="puzzleBox filterObjectPB">
      <h4>Filter Object</h4>
      <span className="puzzleText">Unfiltered: {JSON.stringify(this.state.unfilteredArray, null, 10)}</span>
      <input className="inputLine" onChange={ (e) => this.handleChange(e.target.value) }></input>
      <button className="confirmationButton" onClick={ () => { this.updateFilteredArray(this.state.userInput) }}>Filter</button>
      <span className="resultsBox filterObjectRB">Filtered: { JSON.stringify(this.state.filteredArray, null, 10)}</span>
      </div>
    )
  }
}
