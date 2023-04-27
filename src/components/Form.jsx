import { Avatar, Button, CssBaseline, 
        FormControl, FormControlLabel, 
        Checkbox, Input, InputLabel, 
        Paper, Typography, MenuItem, Select,
        withStyles } from '@material-ui/core';
import { PhoneLockedOutlined } from '@material-ui/icons';
import styles from "./styles/FormStyles";

function Form(props) {
  const {classes} = props;

  return (
    <main className={classes.main}>Form</main>
  )
}

export default withStyles(styles)(Form); 
