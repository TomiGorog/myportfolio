import React from 'react'

import NavStyle from './CSS-modules/NavigationStyles.module.css'
import { ThemeContext } from './App'
import { Link, useNavigate } from 'react-router-dom'

function Navigation() {
    // const [isOpen, setOpen] = React.useState(false)
    // let colorContext = React.useContext(ThemeContext)

    const [activeTab, setActiveTab] = React.useState(undefined)

    let navigate = useNavigate()
    return (
        <div className='navigation'>
                <div 
                onClick={() => {
                   navigate("/") 
                   setActiveTab(undefined)
                }}
                className='logo'>TGDev</div>
           
            <div className={NavStyle.TabsMenu}>
                <Link onClick={() => {
                    setActiveTab("about")
                }} 
                to="about"
                id={activeTab == "about" ? "activeTab" : ""}
                >About</Link>
                <Link onClick={() => {
                    setActiveTab("projects")
                }} 
                to="projects"
                id={activeTab == "projects" ? "activeTab" : ""}
                >Projects</Link>
                <Link onClick={() => {
                    setActiveTab("contact")
                }} 
                to="contact"
                id={activeTab == "contact" ? "activeTab" : ""}
                >Contact</Link>
                
                <a href="TamasGorog_Frontend_Developer.pdf" target="_blank" >Resume</a>
            </div>

        </div>
    )
}

export default Navigation