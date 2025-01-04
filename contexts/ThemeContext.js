import { createContext, useState } from "react";

export const ThemeContext=createContext();

export default function ThemeContextProvider({children})
{
    const[isDark,SetIsDark]=useState(JSON.parse(localStorage.getItem('isDarkMode')));
    return<ThemeContext.Provider value={[isDark,SetIsDark]}>
        {children}
    </ThemeContext.Provider>
}