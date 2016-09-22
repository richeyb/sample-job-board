import React, { Component } from 'react';
import { connect } from 'react-redux';
import JobList from './JobList';

import './App.css';

import AppBar from 'material-ui/AppBar';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';

const switchDepartment = (newDepartment) => ({
  type: 'SWITCH_DEPARTMENT',
  payload: newDepartment,
});

class App extends Component {
  constructor(props) {
    super(props);
    this.onDepartmentChange = this.onDepartmentChange.bind(this);
  }
  renderDepartments(departments) {
    return ['None Selected', ...departments].map(department => (
      <MenuItem value={department} primaryText={department} key={department} />
    ));
  }
  renderDepartmentFilter() {
    const departments = Object.keys(this.props.jobs);
    return (
      <div style={{ 'textAlign' : 'center' }}>
        <SelectField
          value={this.props.selectedDepartment}
          floatingLabelText="Department:"
          onChange={this.onDepartmentChange}
          >
          {this.renderDepartments(departments)}
        </SelectField>
      </div>
    );
  }
  onDepartmentChange(event, index, value) {
    this.props.switchDepartment(value);
  }
  render() {
    return (
      <div className="App">
        <AppBar title="Current Job Openings at Airbnb" />
        {this.renderDepartmentFilter()}
        <hr />
        <JobList />
      </div>
    );
  }
}
const mapStateToProps = (state) => ({
  jobs: state.jobs,
  selectedDepartment: state.selectedDepartment,
});
const AppContainer = connect(mapStateToProps, { switchDepartment })(App);

export default AppContainer;
