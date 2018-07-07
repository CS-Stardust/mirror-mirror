import React, { Component } from 'react';
import axios from 'axios';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import OptionButtons from './OptionButtons';
import ListField from './ListField';

let questionCounter = 0;

const listStyles = {
  marginBottom: '2em',
};

const serializeForm = state => ({
  company: state.company,
  position: state.position,
  notes: state.notes,
  questions: state.questionList.map(val => val.question),
  date: state.date,
});

export default class InterviewForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      company: '',
      position: 'Full Stack',
      notes: '',
      question: '',
      questionList: [],
      date: new Date().toISOString().slice(0, 10),
    };

    this.handleCompany = this.handleCompany.bind(this);
    this.thunkPosition = this.thunkPosition.bind(this);
    this.handleNotes = this.handleNotes.bind(this);
    this.handleQuestion = this.handleQuestion.bind(this);
    this.handleDate = this.handleDate.bind(this);
    this.handleAddQuestion = this.handleAddQuestion.bind(this);
    this.handleRemoveQuestion = this.handleRemoveQuestion.bind(this);
    this.submitForm = this.submitForm.bind(this);
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

  handleQuestion(event) {
    this.setState({ question: event.target.value });
  }

  handleAddQuestion() {
    this.setState({
      questionList: [
        ...this.state.questionList,
        {
          question: this.state.question,
          id: questionCounter,
        },
      ],
      question: '',
    });
    questionCounter += 1;
  }

  handleRemoveQuestion(event) {
    const id = parseInt(event.target.id.slice(9), 10);
    this.setState({
      questionList: [
        ...this.state.questionList.slice(0, id),
        ...this.state.questionList.slice(id + 1),
      ],
    });
  }

  handleDate(event) {
    this.setState({ date: event.target.value });
  }

  submitForm() {
    console.log(serializeForm(this.state));
    axios.post('/test', serializeForm(this.state))
      .then(console.log)
      .catch(console.error);
  }

  render() {
    return (
      <form className="interview-form">
        <OptionButtons
          style={listStyles}
          label="What sort of position did you apply for?"
          value={this.state.position}
          thunkChange={this.thunkPosition}
          options={[
            'Full Stack',
            'Front End',
            'Back End',
            'DevOps',
          ]}
          required
        />
        <div style={listStyles} className="two-fields">
          <TextField
            label="Company"
            value={this.state.company}
            onChange={this.handleCompany}
            required
          />
          <TextField
            label="Date"
            type="date"
            value={this.state.date}
            onChange={this.handleDate}
          />
        </div>
        <ListField
          style={listStyles}
          subheader="Questions"
          label="What questions were most notable?"
          fieldValue={this.state.question}
          listValues={this.state.questionList}
          onChange={this.handleQuestion}
          onAdd={this.handleAddQuestion}
          onRemove={this.handleRemoveQuestion}
          multiline
        />
        <TextField
          style={listStyles}
          label="General notes"
          value={this.state.notes}
          onChange={this.handleNotes}
          fullWidth
          multiline
        />
        <Button
          onClick={this.submitForm}
          variant="contained"
          color="primary"
        >
          Submit
        </Button>
      </form>
    );
  }
}
