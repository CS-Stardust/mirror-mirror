import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';

class OptionButtons extends Component {
  constructor(props) {
    super(props);
    this.state = {
      custom: false,
      value: props.value,
    };
    this.buttonList = [...props.options];
    if (props.allowCustom) this.buttonList.push('Other');

    this.handleValue = this.handleValue.bind(this);
    this.handleCustomOn = this.handleCustomOn.bind(this);
    this.handleButton = this.handleButton.bind(this);
    this.thunkValue = this.thunkValue.bind(this);
  }

  componentDidUpdate() {
    if (this.props.value !== this.state.value) {
      this.props.onChange(this.state.value);
    }
  }

  handleValue(event) {
    this.setState({ value: event.target.value });
  }

  handleCustomOn() {
    this.setState({
      value: '',
      custom: true,
    });
  }

  handleButton(option) {
    return () => this.setState({
      value: option,
      custom: false,
    });
  }

  thunkValue(option) {
    if (option === 'Other') {
      return this.handleCustomOn;
    }
    return this.handleButton(option);
  }

  render() {
    const {
      label,
      value,
      required,
      style,
      size,
    } = this.props;
    return (
      <div style={style} className="option-buttons">
        <Typography
          style={{ marginBottom: '0.5em' }}
          variant="subheading"
        >
          {label}{required && '*'}
        </Typography>
        <div
          style={{
            backgroundColor: '#f4f4f4',
            border: '1px solid rgb(0,0,0,0.23)',
            borderRadius: 4,
          }}
          className="one-line"
        >
          {this.buttonList.map(option => (
            <Button
              size={size || 'medium'}
              variant="outlined"
              key={option}
              style={{
                backgroundColor: value === option ? '#d4d4d4' : '#f4f4f4',
                transition: 'none',
                border: 0,
                borderRadius: 0,
                textTransform: 'none',
              }}
              onClick={this.thunkValue(option)}
              disableRipple
            >
              {option}
            </Button>
          ))}
        </div>
        {this.state.custom &&
          <TextField
            value={this.state.value}
            onChange={this.handleValue}
            fullWidth
          />
        }
      </div>
    );
  }
}

export default OptionButtons;
