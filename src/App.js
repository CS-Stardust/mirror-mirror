import React, { Component } from 'react';
import './App.css';
// import InterviewForm from './components/InterviewForm';
import InterviewDetail from './components/InterviewDetail';

const dummyDetail = {
  displayName: 'Joe Thel',
  handle: 'fakemonster',
  position: 'DevOps',
  company: 'IDEO',
  date: '2018-07-04',
  questions: [
    'Tell us how you got into the world of coding.',
    'Explain what server-side rendering is and how it\'s important.\nHello',
    'Find all combinations of square numbers that can add to 120.',
  ],
  notes: 'Generally a good experience!\n\nI definitely wish I had done more research into architecture, it would have helped a lot. They seem to be most concerned with how much independence you can display.',
};

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Mirror, Mirror</h1>
        </header>
        {/* <InterviewForm /> */}
        <InterviewDetail {...dummyDetail} />
      </div>
    );
  }
}

export default App;
