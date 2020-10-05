import React from 'react'
import data from './initialstate'
import {
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Checkbox
} from '@material-ui/core';

const TODO = () => (
  <div>
    <List>
      {data.map((item, index) => <Item key={item.id} data={item} />)}
    </List>
  </div>
)

const Item = ({ data }) => {
  const { checked, text } = data
  return (
    <ListItem>
      <ListItemIcon>
        <Checkbox checked={checked}/>
      </ListItemIcon>
      <ListItemText primary={text}/>
    </ListItem>
  )
}
export default TODO
