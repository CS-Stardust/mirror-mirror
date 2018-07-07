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
}) => (
  <div>
    <ClearableList
      subheader={subheader}
      listValues={listValues}
      onRemove={onRemove}
    />
    <TextField
      label={label}
      value={fieldValue}
      onChange={onChange}
      multiline={multiline}
      fullWidth
    />
    <IconButton onClick={onAdd} color="secondary"><AddIcon /></IconButton>
  </div>
);

export default ListField;
