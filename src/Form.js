import { useContext } from 'react';
import { ThemeContext } from './contexts/themeContext';
import useStyles from "./styles/Form";
import { Avatar, Button, Checkbox, FormControl, FormControlLabel, Input, InputLabel, MenuItem, Paper, Select, Typography } from '@mui/material';
import { LockClockOutlined } from "@mui/icons-material";


const Form = () => {

    const context = useContext(ThemeContext)
    const classes = useStyles(context.theme)


    return (
        <div style={{
            display: 'flex', justifyContent: 'center',
            alignItems: 'center', 
        }}>
            <main className={classes.main}>
                <Paper className={classes.paper}>
                    <Avatar className={classes.avatar}>
                        <LockClockOutlined />
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
                            <Input id='email' name='email' autoFocus />
                        </FormControl>
                        <FormControl margin='normal' required fullWidth>
                            <InputLabel htmlFor='password'>Password</InputLabel>
                            <Input id='password' name='password' autoFocus />
                        </FormControl>
                        <FormControlLabel
                            control={<Checkbox color='primary' />}
                            label='Remember Me'
                        />
                        <Button
                            variant='contained'
                            type='submit'
                            fullWidth
                            color='primary'
                            className={classes.submit}
                        >
                            Sign In
                        </Button>
                    </form>
                </Paper>
            </main>
        </div>
    )
}


export default Form;