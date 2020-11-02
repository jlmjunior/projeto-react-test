import React from 'react'

import {
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Divider
} from '@material-ui/core'

import { Link } from "react-router-dom";

import HomeIcon from '@material-ui/icons/Home';
import WorkIcon from '@material-ui/icons/Work';
import InfoIcon from '@material-ui/icons/Info';

const Listas = () => {
  return (
    <div>
      <List component='nav'>
        <ListItem button component={ Link } to="/">
          <ListItemIcon>
            <HomeIcon />
          </ListItemIcon>
          <ListItemText primary='Home' />
        </ListItem>

        <ListItem button component={ Link } to="/vagas">
          <ListItemIcon>
            <WorkIcon />
          </ListItemIcon>
          <ListItemText primary='Vagas' />
        </ListItem>

        <ListItem button component={ Link } to="/sobre">
          <ListItemIcon>
            <InfoIcon />
          </ListItemIcon>
          <ListItemText primary='Sobre' />
        </ListItem>

        <Divider />

      </List>
    </div>
  )
}

export default Listas
