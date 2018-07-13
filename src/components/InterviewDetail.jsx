import React from 'react';
import LabeledText from './LabeledText';

const InterviewDetail = props => {
  const data = props.location.state;
  return (
  <div className="interview-detail">
    <p className="no-margin">{data.interview.displayname}</p>
    <a href={`https://github.com/${data.interview.github_name}`}>{data.interview.github_name}</a>
    <h1>Interview with {data.interview.company}</h1>
    <div className="one-line">
      <LabeledText label="Type" text={data.interview.type} />
      <LabeledText label="Position" text={data.interview.position} />
      <LabeledText label="Date" text={data.interview.interview_date} />
    </div>
    <h2>Notable Questions</h2>
    <ul>
      {
        data.questionsList.map(question =>
          <li key={question.question_id}>{question.question_text}</li>)
      } 
    </ul>
    <h2>Additional Notes</h2>
    {
      data.interview.notes.split(/\n+/).map(line =>
        <p key={line}>{line}</p>)
    }
  </div>
)};

export default InterviewDetail;
