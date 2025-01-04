// import { useContext } from "react"
// import { ThemeContext } from "../contexts/ThemeContext"
import { useTheme } from "../hooks/useTheme"

export default function Header({theme}) {
  //const[isDark,setIsDark]=theme;
  //  const[isDark,setIsDark]=useContext(ThemeContext);
  const[isDark,setIsDark]=useTheme();
  // below is DOM manipulation which is not a good practice
  // if(isDark){
  //   document.body.classList.add('dark');
  // }
  // else{
  //   document.body.classList.remove('dark');
  // }
  // console.log(JSON.parse(localStorage.getItem('isDarkMode')));


    return (
      <header className={`header-container ${isDark?"dark":''}`}>
        <div className="header-content">
          <h2 className="title">
            <a href="/">Where in the world?</a>
          </h2>
          <p className="theme-changer" onClick={()=>{
            // document.body.classList.toggle("dark")---this will set dark class to body when button is clicked and if dark is there then remove
            setIsDark(!isDark)
            localStorage.setItem('isDarkMode',!isDark)
          }}>
            <i className={`fa-solid fa-${isDark?'sun':'moon'}`} />
            &nbsp;&nbsp;{isDark?'Light':'Dark'} Mode
          </p>
        </div>
      </header>
    )
  }