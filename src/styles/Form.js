import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles({
    main: (theme) => ({
        width: "auto",
        display: "block",
        
        flex: 1,
        marginLeft: theme.spacing(3),
        marginRight: theme.spacing(3),
        [theme.breakpoints.up("sm")]: {
          width: 400,
          marginLeft: "auto",
          marginRight: "auto"
        },
        padding: theme.spacing(4)
      }),
      paper: theme => ({
        marginTop: theme.spacing(8),
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        padding: `${theme.spacing(2)}px ${theme.spacing(5)}px ${theme.spacing(2)}px`
      }),
      avatar: theme => ({
        margin: theme.spacing(1),
        backgroundColor: theme.palette.secondary.main
      }),
      form: theme => ({
        width: "100%",
        marginTop: theme.spacing(3)
      }),
      submit: theme => ({
        marginTop: theme.spacing(3)
      })
})
 

export default useStyles;