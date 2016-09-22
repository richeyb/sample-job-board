import React, { Component } from 'react';
import { connect } from 'react-redux';

import Job from './Job';

import CircularProgress from 'material-ui/CircularProgress';

const fetchJobsAction = () => (
  { type: 'FETCH_JOBS' }
);

class JobList extends Component {
  constructor(props) {
    super(props);
    this.renderJobs = this.renderJobs.bind(this);
    this.renderSection = this.renderSection.bind(this);
  }
  componentDidMount() {
    this.props.fetchJobsAction();
  }
  renderSection(section) {
    return (
      <div key={section}>
        <div style={{'textAlign': 'center'}}>
          <h3>{section} ({this.props.jobs[section].length} jobs)</h3>
        </div>
        {this.props.jobs[section].map(job => <Job {...job} key={job.id} />)}
      </div>
    );
  }
  renderJobs() {
    if (Object.keys(this.props.jobs).length === 0) {
      return (
        <div style={{'textAlign' : 'center'}}>
          <h3>Loading...</h3>
          <CircularProgress mode="indeterminate"/>
        </div>
      );
    } else {
      if (this.props.selectedDepartment === 'None Selected') {
        return Object.keys(this.props.jobs).map(this.renderSection);
      } else {
        if (this.props.jobs[this.props.selectedDepartment]) {
          return this.renderSection(this.props.selectedDepartment);
        }
      }
    }
  }
  render() {
    return (
      <div className="JobList">
        {this.renderJobs()}
      </div>
    );
  }
};
const mapStateToProps = (state) => ({
  jobs: state.jobs,
  selectedDepartment: state.selectedDepartment,
});

export default connect(mapStateToProps, { fetchJobsAction })(JobList);
