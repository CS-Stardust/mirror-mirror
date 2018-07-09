import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch
} from 'react-router-dom';
import './App.css';
import InterviewForm from './components/InterviewForm';
import InterviewDetail from './components/InterviewDetail';
import dummyDetail from './sampleInterview';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <header className="App-header">
            <img src="./cs-logo.png" alt="Codesmith logo" />
            <Link to="/"><h1 className="App-title">Mirror Mirror</h1></Link>
          </header>
          <nav>
            <Link to="/interviews/new">Add an Interview</Link>
            <Link to="/interviews/sample">View Sample Interview</Link>
          </nav>
          <Switch>
            <Route exact path="/interviews/new" component={InterviewForm} />
            <Route
              path="/interviews/:id"
              render={props => (
                <InterviewDetail {...dummyDetail} {...props} />
              )}
            />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;