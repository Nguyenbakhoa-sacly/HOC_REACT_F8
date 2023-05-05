import Content from "./Content";
import './App.css';
import { useContext } from "react";
import { themeContext } from "./ThemeContext";
// Context 
// CompA => CompC



function App() {
  // nhan 1 object tu themeContext
  const toggleValue= useContext(themeContext);

  return ( 
      <div>
        <button onClick={toggleValue.toggleTheme}>Toggle theme</button>
        <Content />
      </div>
    );
}

export default App;
