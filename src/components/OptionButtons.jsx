import React from 'react';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';


const standardizedBorderRadius = (idx, length) => ({
  borderTopLeftRadius: idx === 0 ? 4 : 0,
  borderTopRightRadius: idx === length - 1 ? 4 : 0,
  borderBottomRightRadius: idx === length - 1 ? 4 : 0,
  borderBottomLeftRadius: idx === 0 ? 4 : 0,
});

const cleanBorderSides = (idx, length) => {
  if (idx === 0) {
    return { borderRight: 0 };
  }
  if (idx === length - 1) {
    return { borderLeft: 0 };
  }
  return { borderRight: 0, borderLeft: 0 };
};

const OptionButtons = ({
  label,
  value,
  thunkChange,
  options,
  required,
  style,
}) => (
  <div style={style} className="option-buttons">
    <Typography variant="title">{label}{required && '*'}</Typography>
    {options.map((option, idx, { length }) => (
      <Button
        variant="outlined"
        key={option}
        style={{
          backgroundColor: option === value ? '#d4d4d4' : '#f4f4f4',
          transition: 'none',
          ...standardizedBorderRadius(idx, length),
          ...cleanBorderSides(idx, length),
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
