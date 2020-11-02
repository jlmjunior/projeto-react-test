import React from 'react'
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import { makeStyles } from '@material-ui/core/styles';
import * as Api from '../../Util/Api/LoginApi'


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

  const [username, setUsername] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [erro, setErro] = React.useState('');

  const logar = async () => {
    let resposta = await Api.Auth(username, password)

    console.log(resposta)
  }

  return (
    <div>
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
