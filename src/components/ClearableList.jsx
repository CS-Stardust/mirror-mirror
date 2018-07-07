import React from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import ClearIcon from '@material-ui/icons/Clear';

const ClearableList = ({
  subheader,
  listValues,
  onRemove,
}) => (
  <List>
    {listValues.length > 0 && <Typography variant="subheading">{subheader}</Typography>}
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
