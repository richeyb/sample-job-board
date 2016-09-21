import React, { Component } from 'react';
import { connect } from 'react-redux';

import Job from './Job';

const fetchJobsAction = () => (
  { type: 'FETCH_JOBS' }
);

class JobList extends Component {
  componentDidMount() {
    this.props.fetchJobsAction();
  }
  render() {
    return (
      <div className="JobList">
        {this.props.jobs.map(job => <Job {...job} key={job.id} />)}
      </div>
    );
  }
};
const mapStateToProps = (state) => ({
  jobs: state.jobs,
});

export default connect(mapStateToProps, { fetchJobsAction })(JobList);
