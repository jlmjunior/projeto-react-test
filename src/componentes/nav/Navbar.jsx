import React from 'react'
import {AppBar, Toolbar, Typography, makeStyles, IconButton, Button, Hidden, ThemeProvider, createMuiTheme} from '@material-ui/core'
import Modal from '../login/Modal'

import { Link } from "react-router-dom";

import MenuIcon from '@material-ui/icons/Menu'
import HomeIcon from '@material-ui/icons/Home';
import WorkIcon from '@material-ui/icons/Work';
import InfoIcon from '@material-ui/icons/Info';

//const drawerWidth = 240

const custom = createMuiTheme({
  overrides: {
    MuiButton: {
      text: {
        padding: '20px',
      },
    },
  },
});

const useStyles = makeStyles(theme => ({
  menuButton: {
    marginRight: theme.spacing(2),
    // [theme.breakpoints.up('sm')]: {
    //   display: 'none',
    // },
  },
  title: {
    flexGrow: 1
  },
  appBar: {
    // [theme.breakpoints.up('sm')]: {
    //   width: `calc(100% - ${drawerWidth}px)`,
    //   marginLeft: drawerWidth,
    // },
  },
  menuItems: {
    marginLeft: theme.spacing(5),
  }
}))

export const Navbar = (props) => {

  const classes = useStyles()
  const [modal, abrirModal] = React.useState(false);

  const acaoAbrirModal = () => {
    abrirModal(true)
  }

  const acaoFecharModal = () => {
    abrirModal(false)
  }

  return (
    <div>
      <AppBar className={classes.appBar}>

        <Toolbar>

          <Hidden mdUp>
            <IconButton 
              color="inherit" 
              aria-label="menu" 
              className={classes.menuButton}
              onClick={() => props.acaoAbrir()}
            >
              <MenuIcon />
            </IconButton>
          </Hidden>

          <Typography variant="h6" className={classes.title}>
            LOGO
            <Hidden smDown>
              <span className={classes.menuItems}>
                <ThemeProvider theme={custom}>
                  <Button component={ Link } to="/" variant="text" color="inherit" startIcon={<HomeIcon />}>Home</Button>
                  <Button component={ Link } to="/vagas" variant="text" color="inherit" startIcon={<WorkIcon />}>Vagas</Button>
                  <Button component={ Link } to="/sobre" variant="text" color="inherit" startIcon={<InfoIcon />}>Sobre</Button>
                </ThemeProvider>
              </span>
            </Hidden>
          </Typography>

          {
            localStorage.getItem('userconfig') ?
            (
              <>
                {JSON.parse(localStorage.getItem('userconfig')).user.username}
              </>
            ) : (
              <Button variant="text" color="inherit" onClick={() => acaoAbrirModal()}>
                Login
              </Button>
            )
          }


        </Toolbar>

      </AppBar>

      <Modal onClose={acaoFecharModal} open={modal} />

    </div>
  )
}
