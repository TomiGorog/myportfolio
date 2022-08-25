import React from 'react'
import './App.css';
import { Outlet } from 'react-router-dom'
import Navigation from './Navigation';
import ScrollTop from './ScrollTop';
export const ThemeContext = React.createContext(null)


function App() {
  // const listInnerRef = React.useRef();

  // const onScroll = () => {
  //   if (listInnerRef.current) {
  //     const { scrollTop, scrollHeight, clientHeight } = listInnerRef.current;
  //     if (scrollTop + clientHeight === scrollHeight) {
  //       // TO SOMETHING HERE
  //       console.log('Reached bottom')
  //     }
  //   }
  // };

  const [showButton, setShowButton] = React.useState(false)
  console.log(showButton)
  const handleScrollToTop = () => {
    window.scrollTo({top: 0, behavior: 'smooth'})
  }
React.useEffect(() => {
  const handleScrollButtonVisibility = () => {
    console.log(window.scrollY)
    console.log(window.innerHeight)
    window.scrollY > 200 && window.scrollY != window.innerHeight ? setShowButton(true) : setShowButton(false)
  }
  window.addEventListener('scroll', handleScrollButtonVisibility)

  return () => {
    window.removeEventListener('scroll', handleScrollButtonVisibility)
  }
}, [])



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
    <ScrollTop up={handleScrollToTop  } />
      }
        </div>
      </div>
    // </ThemeContext.Provider>
  );
  
}

export default App;
