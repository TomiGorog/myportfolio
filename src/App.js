import React from 'react'
import './App.css';
import { Outlet } from 'react-router-dom'
import Navigation from './Navigation';
import ScrollTop from './ScrollTop';
export const ThemeContext = React.createContext(null)
function App() {


  const [showButton, setShowButton] = React.useState(false)
  console.log(showButton)
  const handleScrollToTop = () => {
    window.scrollTo({top: 0, behavior: 'smooth'})
  }
React.useEffect(() => {
  console.log(window.scrollY)
  const handleScrollButtonVisibility = () => {
    window.scrollY > 200 && window.scrollY < 3200 ? setShowButton(true) : setShowButton(false)
  }
  window.addEventListener('scroll', handleScrollButtonVisibility)

  return () => {
    window.removeEventListener('scroll', handleScrollButtonVisibility)
  }
}, [])

  return (
    // <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <div className="App" id="dark">
        <div id="main">

        <Navigation>
        </Navigation>
        <Outlet />
        {showButton &&
    <ScrollTop up={handleScrollToTop  } />
      }
        </div>
      </div>
    // </ThemeContext.Provider>
  );
  
}

export default App;
