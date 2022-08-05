import React from 'react'

import { Divide as Hamburger } from 'hamburger-react'
import NavStyle from './CSS-modules/NavigationStyles.module.css'
import ReactSwitch from 'react-switch';

import { ThemeContext } from './App'
import { Link, useNavigate } from 'react-router-dom'
function Navigation() {
    const [isOpen, setOpen] = React.useState(false)
    let colorContext = React.useContext(ThemeContext)
    let navigate = useNavigate()
    return (
        <div className='navigation'>
                <div 
                onClick={() => {
                   navigate("/") 
                }}
                className='logo'>TGDev</div>
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
                <a href="TamasGorog_Frontend_Developer.pdf" target="_blank" >Resume</a>
            </div>

        </div>
    )
}

export default Navigation