
import React, { Component, useContext } from "react";
import { ThemeContext } from './contexts/themeContext';
import { LanguageContext } from './contexts/languageContext';


import { AppBar, IconButton, InputBase, Switch, Toolbar, Typography } from "@mui/material";
import { Search as SearchIcon } from "@mui/icons-material";
import useStyles from "./styles/Navbar";


const content = {
    english: {
      search: "Search",
      flag: "🇬🇧"
    },
    french: {
      search: "Chercher",
      flag: "🇫🇷"
    },
    spanish: {
      search: "Buscar",
      flag: "🇪🇸"
    }
  };

const Navbar = (props) => {
    const context = useContext(ThemeContext)
    const classes = useStyles(context.theme)

    console.log({ theme: context.theme })

    return <LanguageContext.Consumer>{value => <div className={classes.root}>
        <AppBar position="static" color="primary">
            <Toolbar>
                <IconButton className={classes.menuButton} color="inherit">
                    {value.language} - {content[value.language].search}
                </IconButton>
                <Typography variant="h6" color={'inherit'} className={classes.title}></Typography>
                <Switch onChange={context.toogleTheme} />
                <div className={classes.grow} />
                <div className={classes.search}>
                    <div className={classes.searchIcon}>
                        <SearchIcon />
                    </div>
                    <InputBase
                        placeholder='Search...'
                        classes={{
                            root: classes.inputRoot,
                            input: classes.inputInput
                        }}
                    />
                </div>
            </Toolbar>
        </AppBar>
    </div>}
    </LanguageContext.Consumer>
}

export default Navbar;
