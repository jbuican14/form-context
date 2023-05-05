import { useContext } from 'react';
import {AppBar, Toolbar, IconButton, Typography, Switch, InputBase, withStyles } from "@material-ui/core"
import { SearchRounded } from '@material-ui/icons';
import styles from '../styles/NavBarStyles';
import { ThemeContext } from '../contexts/ThemeContext'
import { withLanguageContext } from '../contexts/LanguageContext';

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
  const context = useContext(ThemeContext);
  const { isDarkMode, toggleTheme } = context;
  const {classes, languageContext} = props; 
  console.log('🚀 ~ file: Navbar.jsx:12 ~ Navbar ~ props:', props, words[languageContext.language])
  
  return (
    <div className={classes.root}>
      <AppBar position='static' color={isDarkMode? 'default': 'primary'}>
        <Toolbar>
          <IconButton className={classes.menuButton} color="inherit">
            <span>{words[languageContext.language].flag}</span>
          </IconButton>
          <Typography className={classes.title} variant='h4' color='inherit'>
            App Title {languageContext.language}
          </Typography>
          <Switch onChange={toggleTheme} />
          <div className={classes.grow}/>
          <div className={classes.search}>
            <div className={classes.SearchRounded}>
              <SearchRounded />
              </div>
              <InputBase placeholder={`${words[languageContext.language].search}...`} classes={{
                root: classes.inputRoot,
                input: classes.inputInput
              }} />
            
          </div>
        </Toolbar>
      </AppBar>
    </div>
  )
}

export default withLanguageContext(withStyles(styles)(Navbar)); 
