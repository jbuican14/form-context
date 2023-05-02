import { useContext } from 'react';
import {AppBar, Toolbar, IconButton, Typography, Switch, InputBase, withStyles } from "@material-ui/core"
import { SearchRounded } from '@material-ui/icons';
import styles from '../styles/NavBarStyles';
import { ThemeContext } from '../contexts/ThemeContext'

function Navbar(props) {
  const context = useContext(ThemeContext);
  const {classes} = props; 
  
  return (
    <div className={classes.root}>
      <AppBar position='static' color='primary'>
        <Toolbar>
          <IconButton className={classes.menuButton} color="inherit">
            <span>🇫🇷</span>
          </IconButton>
          <Typography className={classes.title} variant='h1' color='inherit'>App Title</Typography>
          <Switch />
          <div className={classes.grow}/>
          <div className={classes.search}>
            <div className={classes.SearchRounded}>
              <SearchRounded />
              </div>
              <InputBase placeholder='Search...' classes={{
                root: classes.inputRoot,
                input: classes.inputInput
              }} />
            
          </div>
        </Toolbar>
      </AppBar>
    </div>
  )
}

export default withStyles(styles)(Navbar); 
