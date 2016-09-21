import React from 'react';

const Job = (props) => (
  <div className="Job">
    <strong>
      {props.location.name.trim()}:
    </strong>
    &nbsp;
    {props.title}
  </div>
);

export default Job;
