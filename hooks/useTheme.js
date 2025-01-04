import { useContext } from "react";
import { ThemeContext } from "../contexts/ThemeContext";

//1st method--// export function useTheme(){
//     const[isDark,SetIsDark]=useContext(ThemeContext);
//     return [isDark,SetIsDark];
// }

//2nd method
export const useTheme=()=>useContext(ThemeContext);
