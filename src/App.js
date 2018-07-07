import React, { Component } from 'react';
import './App.css';
import InterviewForm from './components/InterviewForm';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Mirror, Mirror</h1>
        </header>
        <InterviewForm />
      </div>
    );
  }
}

export default App;
