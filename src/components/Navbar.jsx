import { useContext } from 'react';
import {AppBar, Toolbar, IconButton, Typography, Switch, InputBase, withStyles } from "@material-ui/core"
import { SearchRounded } from '@material-ui/icons';
import styles from '../styles/NavBarStyles';
import { ThemeContext } from '../contexts/ThemeContext'
import { LanguageContext } from '../contexts/LanguageContext';

const words = {
  english: {
    search:"Search",
    flag:"🇺🇸"
  },
  french: {
    search:"Recherche",
    flag:"🇫🇷"
  },
  spanish: {
    search:"Buscar",
    flag:"🇪🇸"
  },
}

function Navbar(props) {
  const { isDarkMode, toggleTheme } = useContext(ThemeContext);
  const { language } = useContext(LanguageContext);
  const {classes} = props; 
  
  return (
    <div className={classes.root}>
      <AppBar position='static' color={isDarkMode? 'default': 'primary'}>
        <Toolbar>
          <IconButton className={classes.menuButton} color="inherit">
            <span>{words[language].flag}</span>
          </IconButton>
          <Typography className={classes.title} variant='h4' color='inherit'>
            App Title {language}
          </Typography>
          <Switch onChange={toggleTheme} />
          <div className={classes.grow}/>
          <div className={classes.search}>
            <div className={classes.SearchRounded}>
              <SearchRounded />
              </div>
              <InputBase placeholder={`${words[language].search}...`} classes={{
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
