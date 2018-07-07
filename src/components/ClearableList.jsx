import React from 'react';
import List from '@material-ui/core/List';
import ListSubheader from '@material-ui/core/ListSubheader';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import IconButton from '@material-ui/core/IconButton';
import ClearIcon from '@material-ui/icons/Clear';

const ClearableList = ({
  subheader,
  listValues,
  onRemove,
}) => (
  <List subheader={listValues.length ? <ListSubheader>{subheader}</ListSubheader> : ''}>
    {listValues.map((item, idx) => (
      <ListItem style={{ padding: 0 }} key={item.id}>
        <IconButton id={`question-${idx}`} onClick={onRemove}>
          <ClearIcon style={{ fontSize: '1rem' }} />
        </IconButton>
        <ListItemText>{item.question}</ListItemText>
      </ListItem>
    ))}
  </List>
);

export default ClearableList;
