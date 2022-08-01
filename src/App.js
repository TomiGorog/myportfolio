import React from 'react'
import './App.css';
import ReactSwitch from 'react-switch';
import {Outlet} from 'react-router-dom'
import Navigation from './Navigation';
export const ThemeContext = React.createContext(null)

function App() {

  const [theme, setTheme] = React.useState("light")

  const toggleTheme = () => {
    setTheme((curr) => (curr === "light"? "dark" : "light"));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme}}>
      <div className="App" id={theme}>
        <Navigation />
        <Outlet />
        <div className="switch">
          <ReactSwitch onChange={toggleTheme} checked={theme === "dark"} />
        </div>
      </div>
    </ThemeContext.Provider>
  );
}

export default App;
