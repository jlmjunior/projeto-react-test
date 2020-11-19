import React from 'react'
import { Button, TextField, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Snackbar, Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
  simulatedDialogContent: {
    padding: '16px 24px',
  },
  textArea: {
    marginBottom: '20px',
  },
}))

const SignIn = () => {
  const classes = useStyles()

  return (
    <div>
      <DialogTitle id="form-dialog-title">Cadastrar</DialogTitle>
      <div className={classes.simulatedDialogContent}>
        <DialogContentText className={classes.textArea}>
          To subscribe to this website, please enter your email address here. We will send updates
          occasionally.
        </DialogContentText>
      </div>
      <DialogActions>
        <Button color="primary">
          Cancel
        </Button>
        <Button color="primary">
          Entrar
        </Button>
      </DialogActions>
    </div>
  )
}

export default SignIn
