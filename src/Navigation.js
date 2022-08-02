import React from 'react'

import { Divide as Hamburger } from 'hamburger-react'
import NavStyle from './CSS-modules/NavigationStyles.module.css'
import ReactSwitch from 'react-switch';

import { ThemeContext } from './App'
import { Link } from 'react-router-dom'
function Navigation() {
    const [isOpen, setOpen] = React.useState(false)
    let colorContext = React.useContext(ThemeContext)

    return (
        <div className='navigation'>
                <div className='logo'>TGDev</div>
            {/* <div className={NavStyle.LogoSwitch}> */}
                {/* <div className={NavStyle.Switch}>
                    {/* <label> {colorContext.theme === "light" ? "Light Mode" : "Dark Mode"}</label>
                    <ReactSwitch onChange={colorContext.toggleTheme} checked={colorContext.theme === "dark"} /> */}
                {/* </div> */} 
            {/* </div> */}
            <div className={NavStyle.TabsMenu}>
                <Link to="about">About</Link>
                <Link to="projects">Projects</Link>
                <Link to="contact">Contact</Link>
                <Link id="resume" to="resume">Resume</Link>
            </div>

        </div>
    )
}

export default Navigation