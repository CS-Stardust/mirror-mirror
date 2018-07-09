import React from 'react';
import TextField from '@material-ui/core/TextField';
import IconButton from '@material-ui/core/IconButton';
import AddIcon from '@material-ui/icons/Add';
import ClearableList from './ClearableList';

const ListField = ({
  subheader,
  label,
  fieldValue,
  listValues,
  onChange,
  onAdd,
  onRemove,
  multiline,
  required,
  style,
}) => (
  <div style={style} className="list-field">
    <ClearableList
      subheader={subheader}
      listValues={listValues}
      onRemove={onRemove}
    />
    <div style={{ display: 'flex' }}>
      <TextField
        id="question-field"
        label={label}
        value={fieldValue}
        onChange={onChange}
        multiline={multiline}
        required={required}
        fullWidth
      />
      <IconButton onClick={onAdd} color="secondary"><AddIcon /></IconButton>
    </div>
  </div>
);

export default ListField;
