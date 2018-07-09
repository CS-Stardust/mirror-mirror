import React from 'react';

const InterviewRow = props => (
  <div style={{ display: 'flex' }}>
    <p>{props.company}</p>
    <p>{props.position}</p>
    <p>{props.displayName}</p>
    <p>{props.questionCount}</p>
  </div>
);

export default InterviewRow;
