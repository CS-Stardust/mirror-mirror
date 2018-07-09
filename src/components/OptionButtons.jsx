import React from 'react';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const OptionButtons = ({
  label,
  value,
  thunkChange,
  options,
  required,
  style,
  allowOther,
  size,
}) => {
  const buttonList = allowOther ? [...options, 'Other'] : options;
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
        {buttonList.map(option => (
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
            onClick={thunkChange(option)}
            disableRipple
          >
            {option}
          </Button>
        ))}
      </div>
    </div>
  );
};

export default OptionButtons;
