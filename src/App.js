import React from 'react'
import './App.css';
import { Outlet, useParams } from 'react-router-dom'
import Navigation from './Navigation';
import ScrollTop from './ScrollTop';
export const TabContext = React.createContext()


function App() {

  const getWindowSize = () => {
    const { innerWidth, innerHeight } = window;
    return { innerWidth, innerHeight };
  }
  const [windowSize, setWindowSize] = React.useState(getWindowSize());
  const [activeTab, setActiveTab] = React.useState(undefined)
  const [showButton, setShowButton] = React.useState(false)


 
  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }
  React.useEffect(() => {
    const handleScrollButtonVisibility = () => {
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
    <TabContext.Provider value={{ activeTab, setActiveTab }}>
      <div className="App" >
        <div id="main">
          <Navigation>
          </Navigation>
          <Outlet />
          {showButton &&
            <ScrollTop up={handleScrollToTop} pageWidth={window.innerWidth} />
          }
        </div>
      </div>
    </TabContext.Provider>
  );

}

export default App;
