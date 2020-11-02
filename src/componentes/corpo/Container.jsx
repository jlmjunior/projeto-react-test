import React from 'react'
import { Navbar } from '../nav/Navbar'
import Gaveta from '../nav/Gaveta'

import { makeStyles } from '@material-ui/core'

const estilos = makeStyles(theme => ({
  root: {
    display: 'flex'
  },
  toolbar: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    //backgroundColor: theme.palette.background.default,
    padding: theme.spacing(3),
  },
}))

const Container = ({children}) => {

  const classes = estilos()
  const [abrir, setAbrir] = React.useState(false)

  const acaoAbrir = () => {
    setAbrir(!abrir)
  }

  return ( 
    <div className={classes.root}>
      <Navbar acaoAbrir={acaoAbrir} />

      <Gaveta 
        variant="temporary" 
        open={abrir} 
        onClose={acaoAbrir}
      />
      
      <div className={classes.content}>
        <div className={classes.toolbar}></div>

        {children}

      </div>
    </div>
  )
}

export default Container
