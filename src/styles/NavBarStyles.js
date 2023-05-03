import { Fade } from '@material-ui/core'
const styles = theme => {
// console.log('🚀 ~ file: NavBarStyles.js:3 ~ styles ~ theme:', theme.breakpoints)
return {
  root: {
    width: "100%",
    marginBottom: 0,

  }, 
  grow: {
    flexGrow: 1
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20
  },
  title: {
    display: "none",
    [theme.breakpoints.up("sm")]: {
      display: "block",
      textTransform: "capitalize"
    }
  },
  search: {
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    // backgroundColor: Fade(theme.palette.common.white, 0.15),
    "&:hover": {
      // backgroundColor: Fade(theme.palette.common.white, 0.25)
    },
    marginLeft: 0,
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing(),
      width: "auto"
    }
  },
  SearchRounded: {
    width: theme.spacing * 9,
    height: "100%",
    position: "absolute",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  inputRoot: {
    color: "inherit",
    width: "100%"
  },
  inputInput: {
    paddingTop: 20,
    paddingRight: 20,
    paddingBottom: 20,
    paddingLeft: 6* 10,
    transition: "width",
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      width: 120,
    "&:focus": {
      width: 200,
    }
    }

  }
};
}
export default styles;