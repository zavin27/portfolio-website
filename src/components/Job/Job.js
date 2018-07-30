import React from 'react';

const job = (props) => (
  <div className={"job " + props.jobClass}>
    <h3>{props.jobDescription}</h3>
    <h6>{props.jobPosition}</h6>
    <p>{props.jobDetails}</p>
  </div>
);

export default job;