import { Component, useState } from "react";
import { ThemeContext } from './contexts/themeContext';
import Navbar from "./Navbar";
import { createTheme } from "@mui/material";
const App = () => {

    const [theme, setTheme] = useState("light")


    const value = { theme: createTheme({ spacing: 1}), setTheme };
    return (
        <ThemeContext.Provider value={value}>
            <div>
                <Navbar />
            </div>
        </ThemeContext.Provider>
    )


}


export default App;