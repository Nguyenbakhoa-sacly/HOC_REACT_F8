import { useState, createContext } from "react";

//1. Create context
//2. provide 
//3. Consumer

const themeContext = createContext()  

//tao provide
function ThemProvider({children}){
    const [theme, setTheme] = useState("dark");

    const toggleTheme = () => {
      //neu theme = dark thi doi thanh light con ko phai thi lai thanh dark
    setTheme(theme === "dark"? "light" : "dark");
    };

    //object
    const value = {
        theme,
        toggleTheme
    }

    return(
        <themeContext.Provider value={value}>
            {children}
        </themeContext.Provider>
    )
}
export{themeContext, ThemProvider}