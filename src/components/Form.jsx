import { Avatar, Button, CssBaseline, 
        FormControl, FormControlLabel, 
        Checkbox, Input, InputLabel, 
        Paper, Typography, MenuItem, Select,
        withStyles } from '@material-ui/core';
import { LockOutlined } from '@material-ui/icons';
import styles from "../styles/FormStyles";
import { LanguageContext } from '../contexts/LanguageContext';
import { useContext } from 'react';

const words = {
  english: {
    email:"Email",
    password: "password",
    rememberMe: "Remember Me",
    signIn: "Sign In"
  },
  french: {
    email:"Adresse Èlectronique",
    password: "Mot de Passe",
    rememberMe: "Souviens-toi de Moi",
    signIn: "S'identifier"
  },
  spanish: {
    email:"Correo Èlectronico",
    password: "password",
    rememberMe: "Acuérdate de Mí",
    signIn: "Iniciar Sesión"
  },
}

function Form({classes}) {
  const context = useContext(LanguageContext);
  const { language, changeLanguage } = context;
  const { email, password, rememberMe, signIn} = words[language];
  return (
    <main className={classes.main}>
      <Paper className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlined />
        </Avatar>
        <Typography variant='h5'>{signIn}</Typography>
        {/* https://stackoverflow.com/questions/60903335/warning-finddomnode-is-deprecated-in-strictmode-finddomnode-was-passed-an-inst */}
        <Select value={language} onChange={changeLanguage}>
          <MenuItem value='english'>English</MenuItem>
          <MenuItem value='french'>French</MenuItem>
          <MenuItem value='spanish'>Spanish</MenuItem>
        </Select>

        <form className={classes.form}>
          <FormControl margin='normal' required fullWidth>
            <InputLabel htmlFor='email'>{email}</InputLabel>
            <Input id="email" name='email' autoFocus />
          </FormControl>
          <FormControl margin='normal' required fullWidth>
            <InputLabel htmlFor='password'>{password}</InputLabel>
            <Input id="password" name='password' autoFocus />
          </FormControl>
          <FormControlLabel control={<Checkbox color='primary'/>} label={rememberMe}/>

          <Button variant='contained' type='submit' fullWidth color='primary' className={classes.submit}>
            {signIn}
          </Button>
        </form>
      </Paper>
    </main>
  )
}

export default withStyles(styles)(Form); 
