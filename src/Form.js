import { useContext } from 'react';
import { ThemeContext } from './contexts/themeContext';
import useStyles from "./styles/Form";
import { Avatar, Button, Checkbox, FormControl, FormControlLabel, Input, InputLabel, MenuItem, Paper, Select, Typography } from '@mui/material';
import { LockClockOutlined } from "@mui/icons-material";
import { LanguageContext } from './contexts/languageContext';

const words = {
    english: {
      signIn: "Sign In",
      email: "Email Address",
      password: "Password",
      remember: "Remember Me"
    },
    french: {
      signIn: "Se Connecter",
      email: "Adresse Électronique",
      password: "Mot de Passe",
      remember: "Souviens-toi De Moi"
    },
    spanish: {
      signIn: "Registrarse",
      email: "Correo Electrónico",
      password: "Contraseña",
      remember: "Recuérdame"
    }
  };

const Form = () => {

    const context = useContext(ThemeContext)
    const {language, changeLanguage } = useContext(LanguageContext)

    const classes = useStyles(context.theme)

    const { email, signIn, password, remember } = words[language];
    return (
        <div style={{
            display: 'flex', justifyContent: 'center',
            alignItems: 'center', 
        }}>
            <main className={classes.main}>
                <Paper className={classes.paper} sx={{ p: 3}}>
                    <Avatar className={classes.avatar}>
                        <LockClockOutlined />
                    </Avatar>
                    <Typography variant='h5'>Sign In</Typography>
                    <Select value={language} onChange={changeLanguage}>
                        <MenuItem value='english'>English</MenuItem>
                        <MenuItem value='french'>French</MenuItem>
                        <MenuItem value='spanish'>Spanish</MenuItem>
                    </Select>
                    <form className={classes.form}>
                        <FormControl margin='normal' required fullWidth>
                            <InputLabel htmlFor='email'>{email}</InputLabel>
                            <Input id='email' name='email' autoFocus />
                        </FormControl>
                        <FormControl margin='normal' required fullWidth>
                            <InputLabel htmlFor='password'>{password}</InputLabel>
                            <Input id='password' name='password' autoFocus />
                        </FormControl>
                        <FormControlLabel
                            control={<Checkbox color='primary' />}
                            label={remember}
                        />
                        <Button
                            variant='contained'
                            type='submit'
                            fullWidth
                            color='primary'
                            className={classes.submit}
                        >
                            {signIn}
                        </Button>
                    </form>
                </Paper>
            </main>
        </div>
    )
}


export default Form;