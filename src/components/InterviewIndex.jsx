import React, { Component } from 'react';
import axios from 'axios';
import InterviewRow from './InterviewRow';
import dummyDetail from '../sampleInterview';

const deserializer = interview => ({
  displayName: interview.displayName,
  position: interview.position,
  company: interview.company,
  questionCount: interview.questions.length,
});

export default class InterviewIndex extends Component {
  constructor() {
    super();
    this.state = {
      list: [],
    };
  }

  componentDidMount() {
    axios.get('/interviews')
      .then((response) => {
        this.setState({ list: response.map(deserializer) });
      })
      .catch((error) => {
        console.error({ error });
        console.error('Displaying sample data instead.');
        this.setState({ list: [dummyDetail].map(deserializer) });
      });
  }

  render() {
    return (
      <div>
        {
          this.state.list.map((item, idx) =>
            <InterviewRow key={idx} {...item} />)
        }
      </div>
    );
  }
}
