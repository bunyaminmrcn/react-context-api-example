import { createUseStyles } from 'react-jss';
import { alpha } from '@mui/system/colorManipulator';
const useStyles = createUseStyles({
    root: {
        //padding: (props) => props.spacing
        width: '100%',
        marginBottom: 0
    },
    /*
    myLabel: (props) => ({
      display: 'block',
      color: props.labelColor,
      fontWeight: props.fontWeight,
      fontStyle: props.fontStyle
    }),
    */
    grow: {
        flexGrow: 1
    },
    menuButton: {
        marginLeft: -12,
        marginRight: 25
    },
    title: (theme) => ({
        display: 'none',
        [theme.breakpoints.up('sm')]: ({ display: 'block' }),
    }),
    search: theme => ({
        position: 'relative',
        borderRadius: theme.shape.borderRadius,
        backgroundColor: alpha(theme.palette.common.white, .15),
        "&:hover": {
            backgroundColor: alpha(theme.palette.common.white, .25)
        },
        marginLeft: 0,
        width: '100%',
        [theme.breakpoints.up('sm')]: ({ width: 'auto', marginLeft: theme.spacing(1) }),
    }),
    searchIcon: (theme) => ({
        width: theme.spacing(9),
        height: '100%',
        position: 'absolute',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
    }),
    inputRoot: {
        color: 'inherit',
        width: '100%'
    },
    inputInput: theme => ({
        paddingTop: theme.spacing(1),
        paddingRight: theme.spacing(1),
        paddingBottom: theme.spacing(1),
        paddingLeft: theme.spacing(10),
        transition: theme.transitions.create('width'),
        width: "100%",
        [theme.breakpoints.up('sm')]: {
            width: 120,
            "&:focus": {
                width: 200
            }
        }
    })
})

export default useStyles;