import { createTheme } from '@mui/material';
import React from 'react';

export const ThemeContext = React.createContext({
    theme: createTheme({ spacing : 1}),
    themeText: 'dark',
    setTheme: () => { }
  })