import { Component, useState } from "react";
import { ThemeContext } from './contexts/themeContext';
import LanguageProvider from './contexts/languageContext';


import Navbar from "./Navbar";
import { createTheme } from "@mui/material";
import Form from "./Form";
import PageContent from './PageContent'

const App = () => {

    const [isDarkTheme, setIsDarkTheme] = useState(true)
    const toogleTheme = () => {
        setIsDarkTheme(!isDarkTheme)
    }
    const value = { theme: createTheme({ spacing: 2 }), isDarkTheme, toogleTheme };
    return (
        <ThemeContext.Provider value={value}>
            <LanguageProvider>
                <PageContent>
                    <Navbar />
                    <Form />
                </PageContent>
            </LanguageProvider>
        </ThemeContext.Provider>
    )


}


export default App;