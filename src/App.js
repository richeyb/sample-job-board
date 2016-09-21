import React, { Component } from 'react';
import './App.css';
import JobList from './JobList.js';
//import { fetchJobsAction } from './Store';

class App extends Component {
  // componentDidMount() {
  //   fetchJobsAction();
  // }
  render() {
    return (
      <div className="App">
        <h2>Sample Job Board</h2>
        <hr/>
        <JobList />
      </div>
    );
  }
}

export default App;
