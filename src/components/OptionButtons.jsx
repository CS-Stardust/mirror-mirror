import React from 'react';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const OptionButtons = ({
  label,
  value,
  thunkChange,
  options,
}) => (
  <div className="option-buttons">
    <Typography variant="title">{label}</Typography>
    {options.map(option => (
      <Button
        variant="outlined"
        key={option}
        style={{
          backgroundColor: option === value ? '#d4d4d4' : '#f4f4f4',
          transition: 'none',
        }}
        onClick={thunkChange(option)}
        disableRipple
      >
        {option}
      </Button>
    ))}
  </div>
);

export default OptionButtons;
