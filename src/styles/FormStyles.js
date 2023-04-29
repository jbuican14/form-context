const styles = theme => {
  // console.log('🚀 ~ file: FormStyles.js:2 ~ styles ~ theme:', theme)
  
  return {
    main: {
      width: "auto",
      display: "block",
      marginLeft: theme.spacing(3),
      marginRight: theme.spacing(3), // theme.spacing.unit * 3, old implemenation
      [theme.breakpoints.up("sm")]: {
        width: 400,
        marginLeft: "auto",
        marginRight: "auto"
      }
    },
    paper: {
      marginTop: theme.spacing(8),
      display: "flex",
      flexDirection: "column",
      alignItem: "center",
      padding: ` ${theme.spacing(2)}px ${theme.spacing(3)}px ${theme.spacing(3)}px`
    },
    avatar: {
      margin: theme.spacing(1),
      backgroundColor: theme.palette.secondary.main
    },
    form: {
      with: "100%",
      marginTop: theme.spacing(3)
    },
    submit: {
      marginTop: theme.spacing(3)
    }
  }
}

export default styles;