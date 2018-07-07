import React, { Component } from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import OptionButtons from './OptionButtons';

export default class InterviewForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      company: '',
      position: '',
      notes: '',
      interviewer: '',
      question: '',
    };

    this.handleCompany = this.handleCompany.bind(this);
    this.thunkPosition = this.thunkPosition.bind(this);
    this.handleNotes = this.handleNotes.bind(this);
    this.handleInterviewer = this.handleInterviewer.bind(this);
    this.handleQuestion = this.handleQuestion.bind(this);
  }

  handleCompany(event) {
    this.setState({ company: event.target.value });
  }

  thunkPosition(option) {
    return () => this.setState({ position: option });
  }

  handleNotes(event) {
    this.setState({ notes: event.target.value });
  }

  handleInterviewer(event) {
    this.setState({ interviewer: event.target.value });
  }

  handleQuestion(event) {
    this.setState({ question: event.target.value });
  }

  render() {
    return (
      <form className="interview-form">
        <OptionButtons
          label="What sort of position did you apply for?"
          value={this.state.position}
          thunkChange={this.thunkPosition}
          options={[
            'Full Stack',
            'Front End',
            'Back End',
            'DevOps',
          ]}
        />
        <TextField
          label="Company"
          value={this.state.company}
          onChange={this.handleCompany}
        />
        <TextField
          label="Who did you interview with?"
          value={this.state.interviewer}
          onChange={this.handleInterviewer}
          fullWidth
        />
        <TextField
          label="What questions were most notable?"
          value={this.state.question}
          onChange={this.handleQuestion}
          fullWidth
        />
        <TextField
          label="General notes"
          value={this.state.notes}
          onChange={this.handleNotes}
          fullWidth
          multiline
        />
        <Button
          onClick={() => console.log(this.state)}
          variant="contained"
          color="primary"
        >
          Submit
        </Button>
      </form>
    );
  }
}
