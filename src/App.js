import React from 'react'
import './App.css';
import { Outlet } from 'react-router-dom'
import Navigation from './Navigation';
import ScrollTop from './ScrollTop';
export const ThemeContext = React.createContext(null)


function App() {
  function getWindowSize() {
    const { innerWidth, innerHeight } = window;
    return { innerWidth, innerHeight };
  }
  const [windowSize, setWindowSize] = React.useState(getWindowSize());

  const [showButton, setShowButton] = React.useState(false)
  console.log(showButton)
  const handleScrollToTop = () => {
    window.scrollTo({top: 0, behavior: 'smooth'})
  }
React.useEffect(() => {
  const handleScrollButtonVisibility = () => {
    console.log(window.scrollY)
    console.log(window.innerHeight)
    window.scrollY > 200 ? setShowButton(true) : setShowButton(false)
  }
  window.addEventListener('scroll', handleScrollButtonVisibility)

  return () => {
    window.removeEventListener('scroll', handleScrollButtonVisibility)
  }
}, [])

React.useEffect(() => {
  function handleWindowResize() {
    setWindowSize(getWindowSize());
  }

  window.addEventListener('resize', handleWindowResize);

  return () => {
    window.removeEventListener('resize', handleWindowResize);
  };
}, []);

  return (
    // <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <div className="App" >
        <div id="main"
        // onScroll={() => onScroll()} ref={listInnerRef}
        >

        <Navigation>
        </Navigation>
        <Outlet />
        {showButton &&
    <ScrollTop up={handleScrollToTop} pageWidth={window.innerWidth} />
      }
        </div>
      </div>
    // </ThemeContext.Provider>
  );
  
}

export default App;
