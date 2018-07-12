import React, { Component } from 'react';
import axios from 'axios';
import Table from '@material-ui/core/Table';
import TableHead from '@material-ui/core/TableHead';
import TableBody from '@material-ui/core/TableBody';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import Button from '@material-ui/core/Button';
import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider';
import theme from '../theme.js';
import { Link } from 'react-router-dom';
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
      interviewQuestions: []
    };
  }

  componentDidMount() {
    axios.get('/interviews')
      .then((response) => {
        this.setState({ list: response.data });
        console.log('state list', this.state.list);
      })
      .catch((error) => {
        console.error({ error });
        console.error('Displaying sample data instead.');
        this.setState({ list: [dummyDetail].map(deserializer) });
      });
  }

  render() {
    return (
      <MuiThemeProvider theme={theme}>
        <Table className="interview-index">
          <TableHead>
            <TableRow>
              <TableCell>Company</TableCell>
              <TableCell>Position</TableCell>
              <TableCell>Posted by</TableCell>
              <TableCell># of Questions</TableCell>
              <TableCell>Link</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {
              this.state.list.map((item) => {
                return(
                <TableRow key={item.interviewid}>
                  <TableCell>{item.company}</TableCell>
                  <TableCell>{item.position}</TableCell>
                  <TableCell>{item.displayname}</TableCell>
                  <TableCell>{item.questioncount}</TableCell>
                  <TableCell>
                    <Link to={`interviews/${item.interviewid}`}>
                      <Button variant="contained" color="primary">Go</Button>
                    </Link>
                  </TableCell>
                </TableRow>
              )})
            }
          </TableBody>
        </Table>
      </MuiThemeProvider>
    );
  }
}
