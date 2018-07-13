import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch,
} from 'react-router-dom';
import './App.css';
import InterviewIndex from './components/InterviewIndex';
import InterviewForm from './components/InterviewForm';
import InterviewDetail from './components/InterviewDetail';
import dummyDetail from './sampleInterview';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <header className="App-header">
            <img src="/cs-logo.png" alt="Codesmith logo" />
            <h1 className="App-title"><Link to="/">Mirror Mirror</Link></h1>
            <p style={{ marginBottom: '0.5em', fontSize: '0.9em' }} >
              <em>A Codesmith Interview Repository</em>
            </p>
          </header>
          <nav>
            <Link to="/interviews">View All Interviews</Link>
            <Link to="/interviews/new">Add an Interview</Link>
          </nav>
          <Switch>
            <Route exact path="/interviews" component={InterviewIndex} />
            <Route exact path="/interviews/new" component={InterviewForm} />
            <Route
              path="/interviews/:id"
              render={props => (
                <InterviewDetail {...props} />
              )}
            />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
