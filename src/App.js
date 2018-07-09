import React,
{
  Component
}

  from 'react';
import './App.css';
import InterviewForm from './components/InterviewForm';
class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src="./cs-logo.png" alt="Codesmith logo" />
          <h1 className="App-title">Mirror, Mirror: A place to share interview questions</h1>
        </header>
        <InterviewForm />
      </div>
    );
  }
}

export default App;