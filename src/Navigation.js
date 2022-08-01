import React from 'react'
import About from './About'
import Contact from './Contact'
import Projects from './Projects'
import Resume from './Resume'
import { Divide as Hamburger } from 'hamburger-react'
import NavStyle from './CSS-modules/NavigationStyles.module.css'
import ReactSwitch from 'react-switch';

import { ThemeContext } from './App'
function Navigation() {
    const [isOpen, setOpen] = React.useState(false)
    let colorContext = React.useContext(ThemeContext)

    return (
        <div className='navigation'>
            <div className={NavStyle.Burger}></div>
            <div className="switch">
                <label> {colorContext.theme === "light" ? "Light Mode" : "Dark Mode"}</label>
                <ReactSwitch onChange={colorContext.toggleTheme} checked={colorContext.theme === "dark"} />
            </div>
        </div>
    )
}

export default Navigation