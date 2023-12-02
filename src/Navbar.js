
import React, { Component, useContext } from "react";
import { ThemeContext } from './contexts/themeContext';


import { AppBar, IconButton, InputBase, Switch, Toolbar, Typography } from "@mui/material";
import { Search as SearchIcon } from "@mui/icons-material";
import useStyles from "./styles/Navbar";




const Navbar = (props) => {
    const context = useContext(ThemeContext)
    const classes = useStyles(context.theme)

    console.log({ theme: context.theme })
    return <div className={classes.root}>
        <AppBar position="static" color="primary">
            <Toolbar>
                <IconButton className={classes.menuButton} color="inherit">
                    P
                </IconButton>
                <Typography variant="h6" color={'inherit'} className={classes.title}></Typography>
                <Switch />
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
    </div>

}

export default Navbar;
