import { Avatar, Button, CssBaseline, 
        FormControl, FormControlLabel, 
        Checkbox, Input, InputLabel, 
        Paper, Typography, MenuItem, Select,
        withStyles } from '@material-ui/core';
import { PhoneLockedOutlined, LockOutlined } from '@material-ui/icons';
import styles from "../styles/FormStyles";

function Form({classes}) {
  // const {classes} = props;
  // console.log('🚀 ~ file: Form.jsx:11 ~ Form ~ classes:', classes)

  return (
    <main className={classes.main}>
      <Paper className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlined />
        </Avatar>
        <Typography variant='h5'>Sign In</Typography>
        <Select value='english'>
          <MenuItem value='english'>English</MenuItem>
          <MenuItem value='french'>French</MenuItem>
          <MenuItem value='spanish'>Spanish</MenuItem>
        </Select>

        <form className={classes.form}>
          <FormControl margin='normal' required fullWidth>
            <InputLabel htmlFor='email'>Email</InputLabel>
            <Input id="email" name='email' autoFocus />
          </FormControl>
          <FormControl margin='normal' required fullWidth>
            <InputLabel htmlFor='password'>password</InputLabel>
            <Input id="password" name='password' autoFocus />
          </FormControl>
          <FormControlLabel control={<Checkbox color='primary'/>} label="Remember Me"/>

          <Button variant='contained' type='submit' fullWidth color='primary' className={classes.submit}>
            Sign In
          </Button>
        </form>
      </Paper>
    </main>
  )
}

export default withStyles(styles)(Form); 
