import React from 'react';
import LabeledText from './LabeledText';

const InterviewDetail = props => (
  <div className="interview-detail">
    <p className="no-margin">{props.displayName}</p>
    <a href={`https://github.com/${props.handle}`}>{props.handle}</a>
    <h3>Overview</h3>
    <div className="one-line">
      <LabeledText label="Company" text={props.company} />
      <LabeledText label="Position" text={props.position} />
      <LabeledText label="Date" text={props.date} />
    </div>
    <h2>Notable Questions</h2>
    <ul>
      {
        props.questions.map(question =>
          <li>{question}</li>)
      }
    </ul>
    <h2>Additional Notes</h2>
    {
      props.notes.split(/\n+/).map(line =>
        <p>{line}</p>)
    }
  </div>
);

export default InterviewDetail;
