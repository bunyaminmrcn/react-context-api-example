import { Component, useState } from "react";
import { ThemeContext } from './contexts/themeContext';
import Navbar from "./Navbar";
import { createTheme } from "@mui/material";
import Form from "./Form";
const App = () => {

    const value = { theme: createTheme({ spacing: 2}) };
    return (
        <ThemeContext.Provider value={value}>
            <div>
                <Navbar />
                <Form />
            </div>
        </ThemeContext.Provider>
    )


}


export default App;