import React from 'react'
import { Button, TextField, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Snackbar } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { ThemeContext } from '../../context/GlobalContext'
import * as Api from '../../Util/Api/LoginApi'
import MuiAlert from '@material-ui/lab/Alert';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      width: '47%',
    },
  },
}));

const Modal = (props) => {
  const classes = useStyles()

  const {loading, setLoading} = React.useContext(ThemeContext)

  const [username, setUsername] = React.useState('');
  const [password, setPassword] = React.useState('');
  
  const [error, setError] = React.useState('');
  const [alert, setAlert] = React.useState(false);

  const alertClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setAlert(false);
  };

  const logar = async () => {
    props.onClose()
    setLoading(true)
    let response = await Api.Auth(username, password)

    console.log(response)
    setLoading(false)

    if (response === 401) {
      setError('Usuário ou senha incorreto')
      setAlert(true)
    } 
  }

  return (
    <div>
      <div className={classes.root}>
        <Snackbar open={alert} autoHideDuration={6000} onClose={alertClose}>
          <MuiAlert onClose={alertClose} severity={'error'} elevation={6} variant="filled">{error}</MuiAlert>
        </Snackbar>
      </div>

      <Dialog open={props.open} onClose={props.onClose} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">Login</DialogTitle>
        <DialogContent>
          <DialogContentText>
            To subscribe to this website, please enter your email address here. We will send updates
            occasionally.
          </DialogContentText>
          <form className={classes.root} noValidate autoComplete="off">
            <TextField
              autoFocus
              id="user"
              label="Username"
              type="email"
              onChange={ (e) => setUsername(e.target.value) }
            />
            <TextField
              id="pass"
              label="Senha"
              type="password"
              onChange={ (e) => setPassword(e.target.value) }
            />
        </form>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => props.onClose()} color="primary">
            Cancel
          </Button>
          <Button onClick={() => logar()} color="primary">
            Entrar
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  )
}

export default Modal
